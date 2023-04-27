import { reactive } from 'vue';
export const store = reactive({
    cards: [{
        title: 'Knowing',
        text: 'Lorem ipsum dolor sit amet, quit consect.',
        image: 'svg-0.svg'
    },
    {
        title: 'Selling',
        text: 'Lorem ipsum dolor sit amet, quis consect.',
        image: 'svg-1.svg'
    },
    {
        title: 'Learning',
        text: 'Lorem ipsum dolor sit amet, quis consect.',
        image: 'svg-2.svg'
    },
    {
        title: 'Contact',
        text: 'Lorem ipsum dolor sit amet, quis consect.',
        image: 'svg-3.svg'
    },],
    events: [{
        title: 'Melbourne Coaching',
        day: '07',
        date: 'Jan, 2022',
        dateFull: '9:00 am - 5:00 pm, Jan 7,2022',
        location: 'Cambridge, MA 02138, USA'
    },
    {
        title: 'New York Coaching',
        day: '11',
        date: 'Jan, 2022',
        dateFull: '9:00 am - 5:00 pm, Jan 11, 2022',
        location: 'Cambridge, MA 02138, USA'
    },
    {
        title: 'London Coaching',
        day: '21',
        date: 'Jan, 2022',
        dateFull: '9:00 am - 5:00 pm, Jan 21, 2022',
        location: 'Cambridge, MA 02138, USA'
    },],
    categories: [{
        title: 'Mentorship',
        percentage: '78%'
    },
    {
        title: 'Education',
        percentage: '95%'
    },
    {
        title: 'Learning',
        percentage: '65%'
    },
    {
        title: 'Motivation',
        percentage: '83%'
    },],
    news: [{
        title: 'Next investment',
        date: 'May 5, 2019',
        image: 'h1-blog-img-02.jpg',
        author: 'Amanda Doe',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor...'
    },
    {
        title: 'Team Building',
        date: 'May 5, 2019',
        image: 'h1-blog-img-01.jpg',
        author: 'Amanda Doe',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor...'
    },
    {
        title: 'New Business Day',
        date: 'May 5, 2019',
        image: 'h1-blog-img-03.jpg',
        author: 'Amanda Doe',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor...'
    },],
    testimonials: [{
        id: 0,
        name: 'Cynthia Clark',
        bio: '"Corem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua."',
        image: 'h3-img-04.png'
    },
    {
        id: 1,
        name: 'Raffaele Capaldo',
        bio: '"Sono stati giorni infernali, ragazzi miei"',
        image: 'h3-img-07.png'
    },
    {
        id: 2,
        name: 'Clelia Fradella',
        bio: '"Bijou ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua."',
        image: 'h3-img-08.png'
    },],
    logos: [{
        image:'h4-clients-img-03.png',
        imageHover:'h4-clients-img-04-1.png',
        hover:false
    },
    {
        image:'h4-clients-img-05.png',
        imageHover:'h4-clients-img-06-1.png',
        hover:false
    },
    {
        image:'h4-clients-img-07.png',
        imageHover:'h4-clients-img-08-1.png',
        hover:false
    },
    {
        image:'h4-clients-img-09.png',
        imageHover:'h4-clients-img-10-1.png',
        hover:false
    },
    {
        image:'h4-clients-img-01.png',
        imageHover:'h4-clients-img-02.png',
        hover:false
    }]

})