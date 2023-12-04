import Special_exercises from '../view/special_exercises/special_exercises.vue'
import Index from '../view/index/index.vue'
import Information from '../view/information/information.vue'
import Announcement_list from '../view/information/announcement_list.vue'
import Announcement_text from '../view/information/announcement_text.vue'
import Post_publish from'../view/information/post/post_publish.vue'
import Post_text from'../view/information/post/post_text.vue'
import Person_post from'../view/person/post/person_post.vue'
import Person from '../view/person/person.vue'
import Person_update from '../view/person/person_update.vue'
import Person_word_text from '../view/person/vocabulary/person_word_text.vue'
import Person_word_ctoe from '../view/person/vocabulary/person_word_ctoe.vue'
import Person_word_etoc from '../view/person/vocabulary/person_word_etoc.vue'
import Person_reading from'../view/person/special_exercises/person_reading.vue'
import Person_matching from'../view/person/special_exercises/person_matching.vue'
import Person_cloze from'../view/person/special_exercises/person_cloze.vue'
import Person_essay from'../view/person/person_essay.vue'
import Essay from '../view/essay/essay.vue'
import Essay_text from '../view/essay/essay_text.vue'
import Word from '../view/word/word.vue'
import Word_text from '../view/word/word_text.vue'
import Word_ctoe from '../view/word/word_ctoe.vue'
import Word_etoc from '../view/word/word_etoc.vue'
import Reading from '../view/special_exercises/type/reading.vue'
import Writing from '../view/special_exercises/type/writing.vue'
import Cloze from '../view/special_exercises/type/cloze.vue'
import Matching from '../view/special_exercises/type/matching.vue'
import Translation from '../view/special_exercises/type/translation.vue'
import Login from '../view/login/login.vue'
import Reading_answer from '../view/special_exercises/type/reading_answer.vue'
import Examination from '../view/examination/examination.vue'
import Examination_text from '../view/examination/examination_text.vue'
import Matching_answer from '../view/special_exercises/type/matching_answer.vue'
import Cloze_answer from '../view/special_exercises/type/cloze_answer.vue'

// import Reading from '../view/reading/reading.vue'


// const routes=Array<import('vue-router').RouteRecordRaw>
export default [
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/index',
		name: 'Index',
		component: Index
	},
	{
		path: '/information',
		name: 'Information',
		component: Information
	},
	{
		path: '/announcement_list',
		name: 'Announcement_list',
		component: Announcement_list
	},
	{
		path: '/announcement_text',
		name: 'Announcement_text',
		component: Announcement_text
	},
	{
		path: '/post_publish',
		name: 'Post_publish',
		component: Post_publish
	},
	{
		path: '/post_text',
		name: 'Post_text',
		component: Post_text
	},
	{
		path: '/special_exercises',
		name: 'Special_exercises',
		component:Special_exercises
	},
	{
		path:'/examination',
		name:'Examination',
		component:Examination
	},
	{
		path:'/examination_text',
		name:'Examination_text',
		component:Examination_text
	},
	{
		path: '/person',
		name: 'Person',
		meta: {
		       keepAlive: false //设置页面是否需要使用缓存
		   },
		component:Person
	},
	{
		path: '/person_update',
		name: 'Person_update',
		component:Person_update
	},
	{
		path: '/person_post',
		name: 'Person_post',
		component:Person_post
	},
	{
		path: '/person/word_text',
		name: 'Person_word_text',
		component:Person_word_text
	},
	{
		path: '/person/word_etoc',
		name: 'Person_word_etoc',
		component:Person_word_etoc
	},
	{
		path: '/person/word_ctoe',
		name: 'Person_word_ctoe',
		component:Person_word_ctoe
	},
	{
		path: '/person/reading',
		name: 'Person_reading',
		component:Person_reading
	},
	{
		path: '/person/matching',
		name: 'Person_matching',
		component:Person_matching
	},
	{
		path: '/person/cloze',
		name: 'Person_cloze',
		component:Person_cloze
	},
	{
		path: '/person/essay',
		name: 'Person_essay',
		component:Person_essay
	},
	{
		path: '/essay',
		name: 'Essay',
		component:Essay
	},
	{
		path: '/essay_text',
		name: 'Essay_text',
		component:Essay_text
	},
	{
		path: '/word',
		name: 'Word',
		component:Word
	},
	{
		path: '/word/word_text',
		name: 'Word_text',
		component:Word_text
	},
	{
		path: '/word/word_etoc',
		name: 'Word_etoc',
		component:Word_etoc
	},
	{
		path: '/word/word_ctoe',
		name: 'Word_ctoe',
		component:Word_ctoe
	},
	{
		path: '/special_exercises',
		name: 'Special_exercises',
		component:Special_exercises
	},
	{
		path:'/special_exercises/reading',
		name:'Reading',
		component:Reading
	},
	{
		path:'/special_exercises/reading_answer',
		name:'Reading_answer',
		component:Reading_answer
	},
	{
		path:'/special_exercises/writing',
		name:'Writing',
		component:Writing
	},
	{
		path:'/special_exercises/cloze',
		name:'Cloze',
		component:Cloze
	},
	{
		path:'/special_exercises/cloze_answer',
		name:'Cloze_answer',
		component:Cloze_answer
	},
	{
		path:'/special_exercises/matching',
		name:'Matching',
		component:Matching
	},
	{
		path:'/special_exercises/matching_answer',
		name:'Matching_answer',
		component:Matching_answer
	},
	{
		path:'/special_exercises/translation',
		name:'Translation',
		component:Translation
	}

];;
