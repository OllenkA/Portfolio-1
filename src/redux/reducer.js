import {faVk, faFacebook, faTelegram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import timer from '../assets/timer.png';
import pelican from '../assets/pelican1.png';
import goals from '../assets/goals.png';
import todo from '../assets/todolist.png';
import game from '../assets/game.png';
import profile from '../assets/profile-page.png';


const SHOW_PREVIOUS_WORKS = 'SHOW-PREVIOUS-WORKS';
const SHOW_NEXT_WORKS = 'SHOW-NEXT-WORKS';


const initialState = {
    skills: [
        {id: 1, name: 'JS', url: 'https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg'},
        {id: 2, name: 'HTML', url: 'https://pngicon.ru/file/uploads/html5.png'},
        {id: 3, name: 'CSS', url: 'https://code.naustud.io/code-guide/img/css-logo.svg'},
        {id: 4, name: 'REACT', url: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'},
        {id: 5, name: 'REDUX', url: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'},
        {id: 6, name: 'REST API', url: 'https://icon-library.net/images/rest-api-icon/rest-api-icon-8.jpg'},
    ],
    socialIcons: [
        {id: 1, href: 'https://www.facebook.com/profile.php?id=100002374038626', size: '2x', icon: faFacebook},
        {id: 2, href: 'https://www.linkedin.com/in/olga-shamko-153715191/', size: '2x', icon: faLinkedin},
        {id: 3, href: 'https://vk.com/id11395420', size: '2x', icon: faVk},
        {id: 4, href: 'https://t.me/Ollenka_Shamko', size: '2x', icon: faTelegram},
        {id: 5, href: 'https://github.com/OllenkA?tab=repositories', size: '2x', icon: faGithub},
    ],
    navMenu: [
        {id: 1, href: '#aboutMe', nameBlock: 'MAIN'},
        {id: 2, href: '#skills', nameBlock: 'SKILLS'},
        {id: 3, href: '#projects', nameBlock: 'PROJECTS'},
        {id: 4, href: '#contacts', nameBlock: 'CONTACTS'},
    ],
    works: [
        {id: 1, title: 'Timer', image: timer, visible: true,
            linkToPage: 'https://ollenka.github.io/timer/',
            linkToCode: 'https://github.com/OllenkA/timer'},
        {id: 2, title: 'ToDo', image: todo, visible: false,
            linkToPage: 'https://ollenka.github.io/ToDo/',
            linkToCode: 'https://github.com/OllenkA/ToDo'},
        {id: 3, title: 'Social Network', image: pelican, visible: false,
            // linkToPage: 'https://ollenka.github.io/Social-network-pelican/',
            linkToPage: '',
            linkToCode: 'https://github.com/OllenkA/Social-network-pelican'},
        {id: 4, title: 'List of goals', image: goals, visible: false,
            linkToPage: 'https://ollenka.github.io/To-do-list-REACT-with-server-requests/#/',
            linkToCode: 'https://github.com/OllenkA/To-do-list-REACT-with-server-requests'},
        {id: 5, title: 'Game: Catch the dog', image: game, visible: false,
            linkToPage: "https://ollenka.github.io/game-catch-dog-react/",
            linkToCode: 'https://github.com/OllenkA/game-catch-dog-react'},
        {id: 6, title: 'Test task - profile page', image: profile, visible: false,
            linkToPage: "https://ollenka.github.io/profile-page/",
            linkToCode: 'https://github.com/OllenkA/profile-page'},
    ],
};

let reducer = (state = initialState, action) => {
    if (action.type === 'SHOW-NEXT-WORKS') {
        let newObj = state.works.map((el, index, array) => {
            if ((array[array.length - 1].id === action.id) && index === 0) {
                return {
                    ...el,
                    visible: true,
                }
            }
            if (el.id === action.id) {
                if (index < array.length - 1) {
                    array[index + 1] = {...array[index + 1], visible: true}
                }
                return {
                    ...el,
                    visible: false
                }
            } else {
                return el
            }
        });
        return {
            ...state,
            works: newObj,
        };
    }

    if (action.type === 'SHOW-PREVIOUS-WORKS') {
        let previousPhoto = state.works.map((el, index, array) => {
            if(el.id === action.id - 1) {
                return {
                    ...el,
                    visible: true
                }
            }
            if(el.id === action.id && index === 0){
                array[array.length - 1] = {...array[array.length - 1], visible: true};
                return {
                    ...el,
                    visible: false
                }
            } else {
                return el
            }
        });
        return {
            ...state,
            works: previousPhoto,
        };

    } else {
        return state;
    }
};

export const showNextWorksAC = (id) => ({type: SHOW_NEXT_WORKS, id});
export const showPreviousWorksAC = (id) => ({type: SHOW_PREVIOUS_WORKS, id});


export default reducer;