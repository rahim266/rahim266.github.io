var item1 = document.getElementById("side-item1");
var item2 = document.getElementById("side-item2");
var content = document.getElementById("content");
var item1a = document.getElementById("side-item1a");
var item2a = document.getElementById("side-item2a");
var barsbtn = document.getElementById("barsbtn");
var resposide = document.getElementById("siderespo");
var item11 = document.getElementById("side-item11");
var item22 = document.getElementById("side-item22");
var item11a = document.getElementById("side-item11a");
var item22a = document.getElementById("side-item22a");
var respodeger = 0;

var contenthesapsistem = `
<h3>Mustik hesabım donduruldu </h3>
                <p class="bodypone ">Hesabınızın yanlışlıkla kapatıldığını düşünüyorsanız, araştırabilmemiz için lütfen aşağıda istenen bilgileri verin.</p>
                <br>
                <p>Lorem ipsum dolor sit, amet
                    <a href=" ">consectetur adipisicing</a> elit. Nesciunt fugiat velit nemo. Culpa minus obcaecati recusandae consectetur laboriosam quis, nulla eligendi consequatur sunt,
                    <a href=" ">magnam eveniet</a> fugiat est, repellendus placeat sed.</p>

                <br><br>
                <form action=" " method="post ">
                    <label class="hood " for=" "> Adınız Soyadınız</label>
                    <div class="frmname ">
                        <input type="text " name="name " required>
                        <div class="frmusername ">
                            <label for=" ">
                            <div class="usernamelbl1 hood ">Instagram Kullanıcı Adınız</div>
                            <div class="username-explanation ">[ör: Instagram hesabınızın internet adresi instagram.com/[kullaniciadi] ise, bu alana "kullaniciadi " yazın]</div>
                        </label>
                            <input type="text " name="usernama " required>
                        </div>
                        <div class="frmemail ">
                            <label for=" ">
                            <div class="emaillbl1 hood ">E-posta adresiniz</div>
                            <div class="email-explanation ">Instagram hesabınızda kayıtlı e-posta adresi</div>
                        </label>
                            <input type="email " name="email " required>
                        </div>
                </form>
                <p class="bodypone ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint a maxime.</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                    <a href=" "> rem architecto</a> quibusdam, aliquid odit consequatur consequuntur eaque laudantium, molestias voluptas ipsam ut! Inventore
                    <a href=" ">quas consequuntur</a> reprehenderit eligendi atque earum deserunt?
                </p>
                <button class="submitbtn" type="submit " value="sbmit ">Gönder</button>
                </div>`;
var contentsikayet = `
<h3>Mustik hesap aç ab </h3>
                <p class="bodypone ">Hesabınızın yanlışlıkla kapatıldığını düşünüyorsanız, araştırabilmemiz için lütfen aşağıda istenen bilgileri verin.</p>
                <br>
                <p>Lorem ipsum dolor sit, amet
                    <a href=" ">consectetur adipisicing</a> elit. Nesciunt fugiat velit nemo. Culpa minus obcaecati recusandae consectetur laboriosam quis, nulla eligendi consequatur sunt,
                    <a href=" ">magnam eveniet</a> fugiat est, repellendus placeat sed.</p>

                <br><br>
                <form action=" " method="post ">
                    <label class="hood " for=" "> Adınız Soyadınız</label>
                    <div class="frmname ">
                        <input type="text " name="name " required>
                        <div class="frmusername ">
                            <label for=" ">
                            <div class="usernamelbl1 hood ">Instagram Kullanıcı Adınız</div>
                            <div class="username-explanation ">[ör: Instagram hesabınızın internet adresi instagram.com/[kullaniciadi] ise, bu alana "kullaniciadi " yazın]</div>
                        </label>
                            <input type="text " name="usernama " required>
                        </div>
                        <div class="frmemail ">
                            <label for=" ">
                            <div class="emaillbl1 hood ">E-posta adresiniz</div>
                            <div class="email-explanation ">Instagram hesabınızda kayıtlı e-posta adresi</div>
                        </label>
                            <input type="email " name="email " required>
                        </div>
                </form>
                <p class="bodypone ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint a maxime.</p>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                    <a href=" "> rem architecto</a> quibusdam, aliquid odit consequatur consequuntur eaque laudantium, molestias voluptas ipsam ut! Inventore
                    <a href=" ">quas consequuntur</a> reprehenderit eligendi atque earum deserunt?
                </p>
                <button class="submitbtn" type="submit " value="sbmit ">Gönder</button>
                </div>
`;

item11.addEventListener("click", function() {
    content.innerHTML = contenthesapsistem;
    item11a.style.borderColor = "black";
    item11a.style.fontWeight = "600";
    item22a.style.removeProperty('border-color');
    item22a.style.removeProperty('font-weight');
});
item22.addEventListener("click", function() {
    content.innerHTML = contentsikayet;
    item22a.style.borderColor = "black";
    item22a.style.fontWeight = "600";
    item11a.style.removeProperty('border-color');
    item11a.style.removeProperty('font-weight');
});
barsbtn.addEventListener("click", function() {
    if (respodeger == 0) {
        resposide.style.display = "block";
        respodeger = 1;
    } else if (respodeger == 1) {
        resposide.style.display = "none";
        respodeger = 0;
    }

});