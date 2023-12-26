function solve() {
    const form = document.querySelector(".expense-content");
    const expenseInput = document.getElementById("expense");
    const amountInput = document.getElementById("amount");
    const dateInput = document.getElementById("date");
  
    const previewList = document.getElementById("preview-list");
    const expensesList = document.getElementById("expenses-list");
  
    const addBtn = document.getElementById("add-btn");
  
    const deleteBtn = document.querySelector(".btn.delete");
  
    addBtn.addEventListener("click", function () {
      const expenseValue = expenseInput.value.trim();
      const amountValue = amountInput.value.trim();
      const dateValue = dateInput.value.trim();
  
      if (!expenseValue || !amountValue || !dateValue) {
        return;
      }
  
      const expenseItem = createExpenseItem(expenseValue, amountValue, dateValue);
      previewList.appendChild(expenseItem);
  
      expenseInput.value = "";
      amountInput.value = "";
      dateInput.value = "";
  
      addBtn.disabled = true;
    });
  
    previewList.addEventListener("click", function (event) {
      const target = event.target;
  
      if (target.classList.contains("edit")) {
        const expenseItem = findParentByClass(target, "expense-item");
  
        const type = expenseItem.querySelector("article p:nth-child(1)").textContent.trim().replace("Type: ", "");
        const amount = expenseItem.querySelector("article p:nth-child(2)").textContent.trim().replace("Amount: ", "");
        const date = expenseItem.querySelector("article p:nth-child(3)").textContent.trim().replace("Date: ", "");
  
        expenseInput.value = type;
        amountInput.value = amount.replace("$", "");
        dateInput.value = date;
  
        previewList.removeChild(expenseItem);
  
        addBtn.disabled = false;
      } else if (target.classList.contains("ok")) {
        const expenseItem = findParentByClass(target, "expense-item");
  
        const buttonsDiv = expenseItem.querySelector(".buttons");
        buttonsDiv.parentNode.removeChild(buttonsDiv);
  
        expensesList.appendChild(expenseItem);
  
        addBtn.disabled = false;
      }
    });
  
    deleteBtn.addEventListener("click", function () {
      location.reload();
    });
  
    function createExpenseItem(type, amount, date) {
      const expenseItem = document.createElement("li");
      expenseItem.classList.add("expense-item");
  
      const article = document.createElement("article");
  
      const typeParagraph = document.createElement("p");
      typeParagraph.textContent = `Type: ${type}`;
      article.appendChild(typeParagraph);
  
      const amountParagraph = document.createElement("p");
      amountParagraph.textContent = `Amount: ${amount}$`;
      article.appendChild(amountParagraph);
  
      const dateParagraph = document.createElement("p");
      dateParagraph.textContent = `Date: ${date}`;
      article.appendChild(dateParagraph);
  
      expenseItem.appendChild(article);
  
      const buttonsDiv = document.createElement("div");
      buttonsDiv.classList.add("buttons");
  
      const editButton = document.createElement("button");
      editButton.classList.add("btn", "edit");
      editButton.textContent = "edit";
      buttonsDiv.appendChild(editButton);
  
      const okButton = document.createElement("button");
      okButton.classList.add("btn", "ok");
      okButton.textContent = "ok";
      buttonsDiv.appendChild(okButton);
  
      expenseItem.appendChild(buttonsDiv);
  
      return expenseItem;
    }
  
    function findParentByClass(element, className) {
      while (element && !element.classList.contains(className)) {
        element = element.parentNode;
      }
      return element;
    }
  }
  
  window.addEventListener("load", solve);