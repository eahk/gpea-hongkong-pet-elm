export { mainShare, whatsAppShare };

const mainShare = event => {
  event.preventDefault();
  //
  const fbShare = () => {
    var baseURL = "https://www.facebook.com/sharer/sharer.php";
    var u =
      "https://cloud.greenhk.greenpeace.org/petition-oceans-elm?utm_campaign=2020-elm&utm_source=facebook&utm_medium=social&utm_content=main_share#/";
    var t = (window.innerHeight - 436) / 2;
    var l = (window.innerWidth - 626) / 2;
    window.open(
      baseURL + "?u=" + encodeURIComponent(u),
      "_blank",
      "width=626,height=436,top=" + t + ",left=" + l
    );
  };
  // WEB SHARE API
  if (navigator.share) {
    navigator
      .share({
        title: "",
        text:
          "海洋住屋不對立，為了珍貴脆弱的香港海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！👉 ",
        url: "https://act.gp/2XlKLpC"
      })
      .then()
      .catch();
  } else {
    fbShare();
  }
};

const whatsAppShare = event => {
  event.preventDefault();
  var w =
    "https://api.whatsapp.com/send?text=海洋住屋不對立，為了珍貴脆弱的香港海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！👉 https://act.gp/2KCo7Cx";
  window.open(w);
};
