
function main(){
    $('#js-shopping-list-form').submit(function(evt){
    evt.preventDefault();
   
    let input = $('input#shopping-list-entry').val();
   let  template = `<li>
    <span class="shopping-item">${input}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
  $(`.shopping-list`).append(template);
    });
}
$(`.shopping-list`).on("click",".shopping-item-toggle", function(){
    let item = $(this).parent().siblings();
    console.log(item);
    item.toggleClass('shopping-item__checked');
});

$(`.shopping-list`).on("click",".shopping-item-delete", function(){
    let current = $(this).closest('li');
    console.log(current);
    current.remove();
});
$(main);