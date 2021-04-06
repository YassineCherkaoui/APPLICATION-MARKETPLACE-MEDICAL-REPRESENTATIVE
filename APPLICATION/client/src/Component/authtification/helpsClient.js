// ________________Roteurn Token_____________
export const isAuthenticated = () => {
    const token =  localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if(token && role === "Client"){
        return token
    }else{
    return false
}
}