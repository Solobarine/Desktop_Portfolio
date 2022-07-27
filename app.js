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

  // Create Dynamic Page
  const grand = document.querySelector('.show-inactive');
  const content = document.querySelector('.featured-item');
  const heading = document.querySelector('.pop-title');
  const exit = document.querySelector('.exit');
  const html = document.querySelector('#l-1');
  const bootstrap = document.querySelector('#l-2');
  const rails = document.querySelector('#l-3');
  const project = document.querySelector('.pro-image');
  const text = document.querySelector('.short-summary');
  const live = document.querySelector('.pop-button-l');
  const source = document.querySelector('.pop-button-s');
  const img1 = document.querySelector('.l-img')
  const img2 = document.querySelector('.s-img')

// Popup Window
  const projectItems = [{
    title: 'Multi Post Stories',
    close: 'x',
    skillTag: ['html', 'Bootstrap', 'Ruby on Rails'],
    imgSrc: './image/portfolio-snapshot.png',
  summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    liveButton: 'See Live',
    liveImg: './image/live-img.png',
    sourceButton: 'See Source',
    sourceImg: './img/github.png',
  },
  {
    title: 'Descriptive Projects',
    close: 'x',
    skillTag: ['html', 'Bootstrap', 'Ruby on Rails'],
    imgSrc: './image/portfolio-snapshot.png',
    summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    liveButton: 'See Live',
    liveImg: './image/live-img.png',
    sourceButton: 'See Source',
    sourceImg: './img/github.png'
  },
  {
    title: 'Multi Post Stories',
    close: 'x',
    skillTag: ['html', 'Bootstrap', 'Ruby on Rails'],
    imgSrc: './image/portfolio-snapshot.png',
    summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    liveButton: 'See Live',
    liveImg: './image/live-img.png',
    sourceButton: 'See Source',
    sourceImg: './img/github.png'
  },
  {
    title: 'Too much Projects',
    close: 'x',
    skillTag: ['html', 'Bootstrap', 'Ruby on Rails'],
    imgSrc: './image/portfolio-snapshot.png',
    summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    liveButton: 'See Live',
    liveImg: './image/live-img.png',
    sourceButton: 'See Source',
    sourceImg: './img/github.png'
  },
  {
    title: 'Looking for more Projects?',
    close: 'x',
    skillTag: ['html', 'Bootstrap', 'Ruby on Rails'],
    imgSrc: './image/portfolio-snapshot.png',
    summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    liveButton: 'See Live',
    liveImg: './image/live-img.png',
    sourceButton: 'See Source',
    sourceImg: './img/github.png'
  },
  {
    title: 'Torture',
    close: 'x',
    skillTag: ['html', 'Bootstrap', 'Ruby on Rails'],
    imgSrc: './image/portfolio-snapshot.png',
    summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    liveButton: 'See Live',
    liveImg: './image/live-img.png',
    sourceButton: 'See Source',
    sourceImg: './img/github.png',
  },
  {
    title: 'End These Projects ',
    close: 'x',
    skillTag: ['html', 'Bootstrap', 'Ruby on Rails'],
    imgSrc: './image/portfolio-snapshot.png',
    summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    liveButton: 'See Live',
    liveImg: './image/live-img.png',
    sourceButton: 'See Source',
    sourceImg: './img/github.png',
  }];

  const rem = [{
    title: '',
    close: '',
    skillTag: ['', '', ''],
    imgSrc: '',
    summary: '',
    liveButton: '',
    sourceButton: '',
  },
  {
    title: '',
    close: '',
    skillTag: ['', '', ''],
    imgSrc: '',
    summary: '',
    liveButton: '',
    sourceButton: '',
  },
  {
    title: '',
    close: '',
    skillTag: ['', '', ''],
    imgSrc: '',
    summary: '',
    liveButton: '',
    sourceButton: ''
  },
  {
    title: '',
    close: '',
    skillTag: ['', '', ''],
    imgSrc: '',
    summary: '',
    liveButton: '',
    sourceButton: '',
  },
  {
    title: '',
    close: '',
    skillTag: ['', '', ''],
    imgSrc: '',
    summary: '',
    liveButton: '',
    sourceButton: '',
  },
  {
    title: '',
    close: '',
    skillTag: ['', '', ''],
    imgSrc: '',
    summary: '',
    liveButton: '',
    sourceButton: '',
  },
  {
    title: '',
    close: '',
    skillTag: ['', '', ''],
    imgSrc: '',
    summary: '',
    liveButton: '',
    sourceButton: '',
  }
  ];

  function remove(g, array) {
    const ject = array[g];
    content.style.display = 'none';
    grand.style.display = 'none';
    heading.innerHTML = ject.title;
    exit.innerHTML = ject.close;
    const s = ject.skillTag;
    const [x, y, z] = s;
    html.innerHTML = x;
    bootstrap.innerHTML = y;
    rails.innerHTML = z;
    project.src = ject.imgSrc;
    text.innerHTML = ject.summary;
    live.innerHTML = ject.liveButton;
    source.innerHTML = ject.sourceButton;
  }

  function projects(n, arr){
    let pro = arr[n];
    heading.innerHTML = pro.title;
    exit.innerHTML = pro.close;
    function clear() {
    remove(n, rem);
  }
  
  exit.addEventListener('click', clear);
    const a = pro.skillTag;
    const [b, c, d] = a;
    html.innerHTML = b;
    bootstrap.innerHTML = c;
    rails.innerHTML = d;
    project.src = pro.imgSrc;
    text.innerHTML = pro.summary;
    live.innerHTML = pro.liveButton;
    source.innerHTML = pro.sourceButton;
  }

 function pop0() {
   projects(0, projectItems);
   content.style.display = 'grid';
   grand.style.display = 'block';
 }

  function pop1() {
    projects(1, projectItems);
    content.style.display = 'grid';
    grand.style.display = 'block';
  }

  function pop2() {
    projects(2, projectItems);
    content.style.display = 'grid';
    grand.style.display = 'block';
  }

  function pop3() {
    projects(3, projectItems);
    content.style.display = 'grid';
    grand.style.display = 'block';
  }

  function pop4() {
    projects(4, projectItems);
    content.style.display = 'grid';
    grand.style.display = 'block';
  }

  function pop5() {
    projects(5, projectItems);
    content.style.display = 'grid';
    grand.style.display = 'block';
  }

  function pop6() {
    projects(6, projectItems);
    content.style.display = 'grid';
    grand.style.display = 'block';
  }

  document.querySelector('#btn-0').addEventListener('click',pop0);

  document.querySelector('#btn-1').addEventListener('click', pop1);

  document.querySelector('#btn-2').addEventListener('click', pop2);

  document.querySelector('#btn-3').addEventListener('click', pop3);

  document.querySelector('#btn-4').addEventListener('click', pop4);

  document.querySelector('#btn-5').addEventListener('click', pop5);

  document.querySelector('#btn-6').addEventListener('click', pop6);
});