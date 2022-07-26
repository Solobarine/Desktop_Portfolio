document.addEventListener('DOMContentLoaded', () => {
// Menu Section
  const open = document.querySelector('#bars');
  const imgButton = document.querySelector('.img-button');
  const page = document.querySelector('.pop-up');
  const portfolio = document.querySelector('.the-nav1');
  const about = document.querySelector('.the-nav2');
  const contact = document.querySelector('.the-nav3');
  const header = document.querySelector('.header');

  open.addEventListener('click', () => {
    if (page.className === 'pop') {
      page.className = '';
      header.style.display = 'none';
    } else {
      page.className = 'pop';
    }
  });

  imgButton.addEventListener('click', () => {
    if (page.className === '') {
      page.className = 'pop';
      header.style.display = 'block';
    } else {
      page.className = '';
    }
  });

  portfolio.addEventListener('click', () => {
    if (page.className === '') {
      page.className = 'pop';
      header.style.display = 'block';
    } else {
      page.className = '';
    }
  });

  about.addEventListener('click', () => {
    if (page.className === '') {
      page.className = 'pop';
      header.style.display = 'block';
    } else {
      page.className = '';
    }
  });

  contact.addEventListener('click', () => {
    if (page.className === '') {
      page.className = 'pop';
      header.style.display = 'block';
    } else {
      page.className = '';
    }
  });
});