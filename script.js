document.addEventListener('submit',function(event){
    const form=event.target;
    if(form.id==='tv')
    {
        event.preventDefault();
        const username=document.getElementById('ten').value;
        const tuoi=document.getElementById('age').value;
        const email=document.getElementById('mail').value;
        const sodt=document.getElementById('sdt').value;
        const ghchu=document.getElementById('Ghichu').value;

        const error=document.getElementById('errorMsg');
        const success=document.getElementById('successMsg');
        const result=formValid(username,tuoi,email.sodt,ghchu);

        if(!result.valid)
        {
            error.textContent=result.message;
            success.textContent=' ';
        }
        else{
            error.textContent=' ';
            success.textContent='Da gui thanh cong. Quy khach vui long doi vai phut!!!';
            alert("xin cam on quy khach"+username);
        }
    }
});
function formValid(username, sodt)
{
    if(!username||username.trim()===' '||username.includes(' '))
    {
        return{valid:false ,message:"ten tu nguoi dung khong de trong hoac rong..."};
    }
    if(!sodt||sodt.length<=10)
    {
        return{valid:false, message:"dien so dien thoai duoi khong vuot qua 10 so"};
    }
    return true;
}