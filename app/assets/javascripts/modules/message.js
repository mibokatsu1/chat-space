$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Chat-main__body__message-user" data-message-id=${message.id}>
          <div class="Chat-main__body__message-user__name">
            ${message.user_name}
          </div>
          <div class="Chat-main__body__message-user__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__body__message">
          <p class="Message__content">
            ${message.content}
          </p>
          <img class="Message__image" src="${message.image}">
        </div>`
      return html;
    } else {
      let html =
        `<div class="Chat-main__body__message-user" data-message-id=${message.id}>
          <div class="Chat-main__body__message-user__name">
            ${message.user_name}
          </div>
          <div class="Chat-main__body__message-user__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__body__message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>`
      return html;
    }
  }

  $('.Chat-main__footer__form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__body').append(html);      
      $('.Chat-main__footer__form')[0].reset();
      $('.Chat-main__body').animate({ scrollTop: $('.Chat-main__body')[0].scrollHeight});
      $('.Chat-main__footer__form__send-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Chat-main__footer__form__send-btn').prop("disabled", false);
    });
  })
})