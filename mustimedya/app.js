var item1 = document.getElementById("side-item1");
var item2 = document.getElementById("side-item2");
var content = document.getElementById("content");
var item1a = document.getElementById("side-item1a");
var item2a = document.getElementById("side-item2a");

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

item1.addEventListener("click", function() {
    content.innerHTML = contenthesapsistem;
    item1a.style.borderColor = "black";
    item1a.style.fontWeight = "600";
    item2a.style.removeProperty('border-color');
    item2a.style.removeProperty('font-weight');




});
item2.addEventListener("click", function() {
    content.innerHTML = contentsikayet;
    item2a.style.borderColor = "black";
    item2a.style.fontWeight = "600";
    item1a.style.removeProperty('border-color');
    item1a.style.removeProperty('font-weight');
});