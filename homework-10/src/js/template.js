const showTemplate = menu => {
  const ulMenu = document.querySelector('.js-menu');
  menu.forEach(({ id, name, description, image, price, ingredients }) => {
    ulMenu.insertAdjacentHTML(
      'beforeend',
      `<li class="menu__item" data-id=${id}>
        <div class="card">
          <img
            src="${image}"
            alt="${name}"
            class="card__image"
          />
          <div class="card__content">
            <h2 class="card__name">${name}</h2>
            <p class="card__price">
              <i class="material-icons"> monetization_on </i>
              ${price} кредитів
            </p>
      
            <p class="card__descr">
              ${description}
            </p>
      
            <ul class="tag-list">
            ${ingredients
              .map(item => `<li class="tag-list__item">${item}</li>`).join('')
              }              
            </ul>
          </div>
      
          <button class="card__button button">
            <i class="material-icons button__icon"> shopping_cart </i>
            В корзину
          </button>
        </div>
      </li>`
    );
  });
};

export default showTemplate;
