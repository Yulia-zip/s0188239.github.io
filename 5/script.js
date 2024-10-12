document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("btn").addEventListener("click", function(){
			const q = document.getElementById("kol").value;
			const g = document.getElementById("good").value;
			const res = document.getElementById("result");
			const result = q * g;
			const regular = /^[1-9][0-9]*$/;
			if(!regular.test(q)){
					alert("Введите корректное количество товара!!!");}
			else{
					res.textContent = "Стоимость: " + result.toLocaleString();
			}
	});
});