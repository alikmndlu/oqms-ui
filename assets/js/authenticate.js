function redirect(path){
    window.location.replace("file:///C:/Users/ThinkPad%20T580/Desktop/ui/" + path)
}

if(sessionStorage.getItem('jwt') == null){
    redirect("authenticate/login.html")
}

if(window.location.href.match('file:\/\/\/C:\/Users\/ThinkPad%20T580\/Desktop\/ui\/dashboard\/admin_dashboard.html')){
    if(sessionStorage.getItem('role') != 'ROLE_ADMIN'){
        redirect('authenticate/logout.html')
    }
}

if(window.location.href.match('file:\/\/\/C:\/Users\/ThinkPad%20T580\/Desktop\/ui\/dashboard\/teacher_dashboard.html')){
    if(sessionStorage.getItem('role') != 'ROLE_TEACHER'){
        redirect('authenticate/logout.html')
    }
}

if(window.location.href.match('file:\/\/\/C:\/Users\/ThinkPad%20T580\/Desktop\/ui\/dashboard\/student_dashboard.html')){
    if(sessionStorage.getItem('role') != 'ROLE_STUDENT'){
        redirect('authenticate/logout.html')
    }
}

if(window.location.href.match('(file:\/\/\/C:\/Users\/ThinkPad%20T580\/Desktop\/ui\/)(admin\/).*')){
    if(sessionStorage.getItem('role') != 'ROLE_ADMIN'){
        redirect('authenticate/logout.html')
    }
}

if(window.location.href.match('(file:\/\/\/C:\/Users\/ThinkPad%20T580\/Desktop\/ui\/)(teacher\/).*')){
    if(sessionStorage.getItem('role') != 'ROLE_TEACHER'){
        redirect('authenticate/logout.html')
    }
}

if(window.location.href.match('(file:\/\/\/C:\/Users\/ThinkPad%20T580\/Desktop\/ui\/)(student\/).*')){
    if(sessionStorage.getItem('role') != 'ROLE_STUDENT'){
        redirect('authenticate/logout.html')
    }
}

