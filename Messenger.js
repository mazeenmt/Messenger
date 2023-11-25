var img_send = document.getElementById("like")
const ecrire_msg = document.getElementById("ecrire_msg")
const my_msg = document.querySelector('.my_message')
const his_msg_cont = document.querySelector('.his_message_container')
const his_msg = document.querySelector('.his_message')
const messages = document.getElementById("messages")
const discussion = document.querySelectorAll('.discussion')
const onlineUsers = document.querySelectorAll('.online_user')
const right_container = document.getElementById('user_entete')
var userImg = user_entete.querySelector('.user_img')
var userName = user_entete.querySelector('.user_name')  
var hisMsgImg = messages.querySelector('.user_img')
var hisMsgText = messages.querySelector('.his_message')
for (let person of discussion){
    person.addEventListener("click", function(event){
        openDiscussion(person)
    })
}
for (let person of onlineUsers){
    console.log(person)
    person.addEventListener("click", function(event){
        openDiscussionOnline(person)
    })
}
img_send.addEventListener("click", sendMsg)
ecrire_msg.addEventListener("input", liketosend)
ecrire_msg.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13)
        sendMsg()
})
function liketosend(){
    if (ecrire_msg.value == ''){
        img_send.src = 'img/like.png'
        img_send.alt = "Like"
    }
    else{
        img_send.src = 'img/send.png'
        img_send.alt = "Send"
    }
}
function sendMsg(){
    if (ecrire_msg.value == ''){
        let like = img_send.cloneNode(true)
        like.style.height = '50px'
        like.style.marginLeft = '90%'
        messages.appendChild(like)
    }
    else{
        let inputText = ecrire_msg.value
        let msg = my_msg.cloneNode(true)
        msg.innerHTML = inputText
        messages.appendChild(msg)
        let hismsgcont = his_msg_cont.cloneNode(true)
        messages.appendChild(hismsgcont)
        ecrire_msg.value = ""
    }
    scrollToBottom()
    liketosend()
}
function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
}
function openDiscussion(person){
    let user_Img = person.querySelector('.user_img');
    let user_Name = person.querySelector('.user_name');
    his_msg_textDisc = person.querySelector('.user_msg');
    userImg.src = user_Img.src
    hisMsgImg.src = user_Img.src
    hisMsgText.textContent = his_msg_textDisc.textContent
    if (userName.textContent != user_Name.textContent){
        var childs = Array.from(messages.children);
        for (var i = childs.length - 1; i >= 2; i--) {
            messages.removeChild(childs[i]);
        }
    }
    userName.textContent = user_Name.textContent
}
function openDiscussionOnline(person){
    let user_Img = person.querySelector('.user_img');
    let user_Name = person.querySelector('.user_name');
    his_msg_textDisc = document.querySelectorAll('.username_msg > .user_msg_container');
    for (DiscMsg of his_msg_textDisc){
        if (DiscMsg.querySelector('.user_name').textContent == user_Name.textContent)
            hisMsgText.textContent = DiscMsg.querySelector('.user_msg').textContent
    }
    userImg.src = user_Img.src
    hisMsgImg.src = user_Img.src
    if (userName.textContent != user_Name.textContent){
        var childs = Array.from(messages.children);
        for (var i = childs.length - 1; i >= 2; i--) {
            messages.removeChild(childs[i]);
        }
    }
    userName.textContent = user_Name.textContent
}