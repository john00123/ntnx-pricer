const cardData = [
  {
    title : `Capacity`,
    data: `
    <label for = 'cores'>Number of Cores</label>
    <input></input>
    <label for = 'hdd'>Hard Drive TiB</label>
    <input></input>
    <label for = 'flash'>Flash TiB</label>
    <input id = 'flash'></input>
    `,
  },
  {
    title : `Acropolis`,
    data: `<b>hi</b>`,
  },
  {
    title : `Addons`,
    data: `<b>hi</b>`,
  },
  {
    title : `Prism Pro`,
    data: `<b>hi</b>`,
  },
  {
    title : `Prism Pro`,
    data: `<b>hi</b>`,
  },
  {
    title : `Prism Pro`,
    data: `<b>hi</b>`,
  },
]


function mapGenerator(){
  cardData.map(card => {
    $('.deck').append(`
      <div class='card'>
          <div class="card-header"> ${card.title}</div>
          <div class="card-body">${card.data}</div>
      </div>`);
  });
}


$(document).ready(function(){
  mapGenerator();
  $('.deck').after(`<div class='result'></div>`);

});





//
//
// <div class='card'>
//   <div class="card-header"> Additional Licenses</div>
//   <div class="card-body">
//     <details>
//       <summary>Pro license</summary>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
//       <label for='nodes'></label>
//       <input id='nodes'></input>
//     </details>
//   </div>
// </div>
