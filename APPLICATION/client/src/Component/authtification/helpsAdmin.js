// ________________Roteurn Token_____________
export const isAuthenticated = () => {
    const token =  localStorage.getItem('token');
    

    if(token){
        return token
   }else{
    return false
}
}