


export const redirectpageDetails=(isStoregekey,data,navigate,path)=>{

localStorage.setItem(isStoregekey,JSON.stringify(data));


navigate(path);

}