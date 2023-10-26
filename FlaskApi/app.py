from api import apikey
from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS
from csv import writer

import os
import time
import openai
import json
import jsonpickle

apikeys = apikey

app = Flask(__name__)
cors = CORS(app)


############## GPT PROMPT ####################
def gpt(inp,system):
    systems = {"role":"system","content":system}
    print("System prompt : ",system)
    new_inp = inp
    new_inp.insert(0,systems)
    print("inp : \n ",new_inp)
    openai.api_key = apikeys
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo", 
    messages=new_inp
    )
    return completion

############    GET CHATS BY USER ID ##################
def get_chats(id):
    # path = str(os.getcwd())+'\\'+id+'.json'
    path=id
    print("getchats : ",path)
    isexist = os.path.exists(path)
    if isexist:
        data = pd.read_json(id)
        chats = data.chat
        return  list(chats)
    else:
        return "No Chat found on this User ID."





############### APPEND NEW CHAT TO USER ID JSON FILE #################
def write_chat(new_data, id):
    with open(id,'r+') as file:
          # First we load existing data into a dict.
        file_data = json.load(file)
        # Join new_data with file_data inside emp_details
        file_data["chat"].append(new_data)
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        json.dump(file_data, file, indent = 4)



################################ CHECK IF USER IS ALREADY EXIST IF NOT CREATE ONE ELSE RETURN GPT REPLY ##################
@app.route('/api', methods=['POST'])
def check_user():
    
    ids = request.json['user_id']
    prompt = request.json['prompt']
    system = request.json['system']
    coach = request.json['coach']

    print("asd")
    path = str(os.getcwd())+'//chats//'+ids+'_'+coach+'.json'
    # path = str(os.getcwd())+'\\'+"5467484.json"
    print(path)
    isexist = os.path.exists(path)
    if isexist:
        # try:
        print(path," found!")
        write_chat({"role":"user","content":prompt},path)
        # print()
        chats = get_chats(path)
        print(chats)
        send = gpt(chats,system)
        reply = send.choices[0].message
        print("reply    ",reply.content)
        write_chat({"role":"assistant","content":reply.content},path)
        return {"message":reply,"status":"OK"}
        # except:
        #     return {"message":"something went wrong!","status":"404"}

    else:
        print(path," Not found!")
        dictionary = {
        "user_id":ids,
        "chat":[]


        }
        
        # Serializing json
        json_object = json.dumps(dictionary, indent=4)
        
        # Writing to sample.json
        with open(path, "w") as outfile:
            outfile.write(json_object)
        reply = check_user()
        return reply

####################   NEW ENPOINT GET CHAT ##############################
@app.route('/get_chats', methods=['POST'])
def get_chatss():
    ids = request.json['user_id']
    coach = request.json['coach']
    path = str(os.getcwd())+'//chats//'+ids+"_"+coach+'.json'
    return jsonpickle.encode(get_chats(path))

######################################################### clear chats
@app.route('/delete_chats', methods=['POST'])
def clear_chatss():
    ids = request.json['user_id']
    # return jsonpickle.encode(get
    # _chats(ids))
    try:
        path =os.remove(str(os.getcwd())+'//chats//'+ids+'.json')
        return {"status":"OK","message":"success"}
    except :
        return { "status":"error","message":"Something went wrong,chat doesn't exist" }



if __name__ == '__main__':
    app.run()
    
