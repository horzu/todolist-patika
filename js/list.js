const newElement = () =>{
    if(document.getElementById("task").value.trim() !== ""){ // input değeri boşsa yada sadece space karakteri kullanılmışsa diye kontrol eder
    let listItemDOM = document.createElement("li") // li tagi ile list item domu oluşturur.
    listItemDOM.innerHTML = document.getElementById("task").value; // list item'ın değeri input value değeriyle doldurur
    let button = document.createElement("span") // list itemı silebilmek için buton oluşturur.
    button.innerHTML = "&times;"; // buton içindeği değerin çarpı olarak gözükmesi sağlanır.
    button.classList.add("delete") // butona delete class'ı verilir.
    button.onclick = function(){ // butona basıldığında item silindi toast uyarısı verilmesi sağlanır.
        button.parentElement.remove();
        $('.toast.deleted').toast("show")
    }
    listItemDOM.append(button) // buton list item domuna eklenir.
    listItemDOM.onclick = function(){ // list item'a tıklandığında checked classı eklenip çıkarılması sağlanır.
        listItemDOM.classList.contains("checked") ? listItemDOM.classList.remove("checked") : listItemDOM.classList.add("checked")
    }

    document.getElementById("list").append(listItemDOM); // list id'li ul tagine list item'ın eklenmesi sağlanır.
    document.getElementById("task").value = "" // input içindeki değerin temizlenmesi sağlanır.
    $('.toast.success').toast("show") // Başarıyla eklendi toastının gösterilmesi sağlanır.


    } else { // input değeri yanlışsa hata toast'ını gösterir ve input içindeki değeri siler.
        $('.toast.error').toast("show")
        document.getElementById("task").value = ""
    }
}

