function setToLocalStorage(tasksTables){
  if(JSON.parse(localStorage.getItem('lists')) && JSON.parse(localStorage.getItem('lists')) !== []){
      localStorage.removeItem(tasksTables);
      localStorage.setItem('lists', JSON.stringify(tasksTables))
  }else{
      localStorage.setItem('lists', JSON.stringify(tasksTables))
  }
}