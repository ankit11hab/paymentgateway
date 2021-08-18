document.getElementById('but').addEventListener("click", () => {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "softech256@gmail.com",
        Password: "B1B7F32749B1D764B01982A84953A5B89317",
        To: `${email}`,
        From: "softech256@gmail.com",
        Subject: `Donation Successful!`,
        Body: `Hi ${name},<br><br>
        Thank you very much for donating an amount of <b>Rs. ${amount}</b> to Hustler's Den. We truly and sincerely appreciate your support of our mission.<br><br>
        Thanking you. <br><br>
        Yours faithfully,<br>
        Arka Dutta<br>
        Founder - Hustler's Den`,
    }).then((message) => alert("Payment successful"));
})