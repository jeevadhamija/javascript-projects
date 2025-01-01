document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let total=0;
  render(expenses);
  //let total=calculatetoatal();
  expenseForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const expname=expenseNameInput.value;
    const amnt=expenseAmountInput.value;
    const exp={name:expname,amount:amnt};
    expenseNameInput.value="";
    expenseAmountInput.value="";
    expenses.push(exp);
   // console.log(expenses);
   saveExpensesTolocal();
    render(expenses);
  })
  function render(expenses){
    expenseList.innerHTML="";
    total=0;
    if(expenses.length>0){
    expenses.forEach((expense,index) => {
      total=total+parseInt(expense.amount);
      const li=document.createElement('li');
      li.innerHTML=`<span>${expense.name}  amount : ${expense.amount}</span>
      <button exp-id=${index}>remove</button>`
      expenseList.appendChild(li);
      totalAmountDisplay.innerText=total;
    });
    totalAmountDisplay.innerText=total;


    }
  }
  function saveExpensesTolocal() {
  
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("exp-id"));
      expenses = expenses.filter((expense,index) => index !== expenseId);
      if(expenses.length===0){
        totalAmountDisplay.innerText=0;
      }
      saveExpensesTolocal();
      render(expenses);
    }
  });  
});