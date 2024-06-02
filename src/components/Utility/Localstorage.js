const getStoredDataForR=()=>{
    const storedData=localStorage.getItem('booksDataR');
    if(storedData)
        {
            return JSON.parse(storedData);
        }
        else
        {
            return [];
        }
}
const getStoredDataForW=()=>{
    const storedData=localStorage.getItem('booksDataW');
    if(storedData)
        {
            return JSON.parse(storedData);
        }
        else
        {
            return [];
        }
}
const SavestoredDataForR=(id)=>{
    const save=getStoredDataForR();
    const exist=save.find(bookId=>bookId===id);
    if(!exist)
        {
            save.push(id);
            localStorage.setItem('booksDataR',JSON.stringify(save));
        }
}
const SavestoredDataForW=(id)=>{
    const save=getStoredDataForW();
    const exist=save.find(bookId=>bookId===id);
    if(!exist)
        {
            save.push(id);
            localStorage.setItem('booksDataW',JSON.stringify(save));
        }
}
export {getStoredDataForR,getStoredDataForW,SavestoredDataForR,SavestoredDataForW};