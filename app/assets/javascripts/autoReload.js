$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Chat-main__box" data-message-id=${message.id}>
          <div class="Chat-main__body__message-user">
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
          </div>
        </div>`
      return html;
    } else {
      let html =
        `<div class="Chat-main__box" data-message-id=${message.id}>
          <div class="Chat-main__body__message-user">
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
          </div>
        </div>`
      return html;
    }
  }

  let reloadMessages = function() {
    let last_message_id = $('.Chat-main__box:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Chat-main__body').append(insertHTML);
        $('.Chat-main__body').animate({ scrollTop: $('.Chat-main__body')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});