export { mainShare, whatsAppShare }

const mainShare = event => {
  event.preventDefault()
  //
  const fbShare = () => {
    var baseURL = 'https://www.facebook.com/sharer/sharer.php'
    var u =
      'https://act.greenpeace.org/page/40590/petition/1?utm_campaign=2019-elm&utm_source=facebook&utm_medium=social&utm_content=main_share#/'
    var t = (window.innerHeight - 436) / 2
    var l = (window.innerWidth - 626) / 2
    window.open(
      baseURL + '?u=' + encodeURIComponent(u),
      '_blank',
      'width=626,height=436,top=' + t + ',left=' + l
    )
  }
  // WEB SHARE API
  if (navigator.share) {
    // we can use web share!
    navigator
      .share({
        title: '',
        text:
          '海洋住屋不對立，為了珍貴脆弱的香港海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！👉 ',
        url: 'https://act.gp/2WyugY0',
      })
      .then(() => console.log('Successfully shared'))
      .catch(error => console.log('Error sharing:', error))
  } else {
    // provide a fallback here
    fbShare()
  }
}

const whatsAppShare = event => {
  event.preventDefault()
  var w =
    'https://api.whatsapp.com/send?text=海洋住屋不對立，為了珍貴脆弱的香港海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！👉 https://act.gp/2EH4gj5'
  window.open(w)
}
