new Vue({
    el: '#app',
    data: {
        selectedTag: '',
        posts: [
            {
                title: 'Создадим лучший макет перепланировки',
                date: '26 Декабря, 2024',
                tag: 'Кухня',
                content: [
                    {
                        type: 'img',<script src="js/app.js"></script>
                        src: 'images/details-1.png'
                    }
                    , {
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel interdum elit, at congue lorem. Vestibulum pellentesque, orci in gravida fermentum, purus libero varius urna, ut vehicula velit nulla a nisl. Sed aliquet, nisi eget sagittis tincidunt, nisi elit consectetur nunc, ut congue nisl nisi vitae nunc. Proin consectetur, nisi id ullamcorper varius, nisi nisi aliquam nisi, eget aliquam nisi nisi eget nisi.'
                    }
                    , {
                        type: 'img',
                        src: 'images/details-2.png'
                    }
                    , {
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel interdum elit, at congue lorem. Vestibulum pellentesque, orci in gravida fermentum, purus libero varius urna, ut vehicula velit nulla a nisl. Sed aliquet, nisi eget sagittis tincidunt, nisi elit consectetur nunc, ut congue nisl nisi vitae nunc. Proin consectetur, nisi id ullamcorper varius, nisi nisi aliquam nisi, eget aliquam nisi nisi eget nisi.'
                    }
                ]
            }
            , {
                title: 'Design sprints are great',
                date: '22 Декабря, 2024',
                tag: 'Дизайн',
                content: [
                    {
                        type: 'img',
                        src: 'images/details-3.png'
                    }
                    , {
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel interdum elit, at congue lorem. Vestibulum pellentesque, orci in gravida fermentum, purus libero varius urna, ut vehicula velit nulla a nisl. Sed aliquet, nisi eget sagittis tincidunt, nisi elit consectetur nunc, ut congue nisl nisi vitae nunc. Proin consectetur, nisi id ullamcorper varius, nisi nisi aliquam nisi, eget aliquam nisi nisi eget nisi.'
                    }
                    , {
                        type: 'img',
                        src: 'images/details-4.png'
                    }
                    , {
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia'
                    }
                ]
            }
            , {
                title: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабря, 2024',
                tag: 'Здания',
                content: [
                    {
                        type: 'img',
                        src: 'images/details-5.png'
                    }
                    , {
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia'
                    }
                    , {
                        type: 'img',
                        src: 'images/details-6.png'
                    }
                    , {
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia'
                    }
                ]
            }
            , {
                title: 'Спальные интерьеры и возможности дизайнеров',
                date: '9 Декабря, 2024',
                tag: 'Спальня',
                content: [
                    {
                        type: 'img',
                        src: 'images/details-7.png'
                    }
                    , {
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia'
                    }
                ]
            }
            , {
                title: 'Лучшие интерьерные решения для офисов',
                date: '25 Декабря, 2024',
                tag: 'Архитектура',
                content: [
                    {
                        type: 'img',
                        src: 'images/details-8.png'
                    }
                    , {
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia'
                    }
                ]
            }
            , {
                title: 'Жизнь без дизайнерских решений',
                date: '10 Декабря, 2024',
                tag: 'Архитектура',
                content: [
                    {
                        type: 'img',
                        src: 'images/details-9.png'
                    }
                    , {
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia'
                    }
                ]
            }
            , {
                title: 'Квартиры и офисы - делаем лучше',
                date: '05 Декабря, 2024',
                tag: 'Планировка',
                content: [
                    {
                        type: 'img',
                        src: 'images/details-10.png'
                    }
                    , {
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia. Aliquam volutpat aliquam luctus. Pellentesque vitae aliquam nunc. Sed laoreet metus nec purus luctus, quis luctus lorem consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel interdum elit, at congue lorem. Vestibulum pellentesque, orci in gravida fermentum, purus libero varius urna, ut vehicula velit nulla a nisl. Sed aliquet, nisi eget sagittis tincidunt, nisi elit consectetur nunc, ut congue nisl nisi vitae nunc. Proin consectetur, nisi id ullamcorper varius, nisi nisi aliquam nisi, eget aliquam nisi nisi eget nisi.'
                    }
                    , {
                        type: 'img',
                        src: 'images/details-11.png'
                    }
                ]
            }
        ],
        tags: ['Кухня', 'Спальня', 'Здания', 'Архитектура', 'Планировка', 'Дизайн']
    },
    computed: {
        filteredPosts() {
            if (this.selectedTag) {
                return this.posts.filter(post => post.tag === this.selectedTag);
            }
            return this.posts;
        }
    },
    methods: {
        filterPosts(tag) {
            this.selectedTag = tag;
        }
    },
    components: {
        'blog-posts': {
            props: ['posts'],
            template: `
                <div>
                    <div v-for="post in posts" :key="post.title">
                        <h2>{{ post.title }}</h2>
                        <p class="blog-details__article-date">{{ post.date }}</p>
                        <p class="blog-details__article-tags">{{ post.tag }}</p>
                        <div v-for="(content, index) in post.content" :key="index">
                            <picture v-if="content.type === 'img'">
                                <img class="blog-details__article-img" :src="content.src" alt="">
                            </picture>
                            <p v-if="content.type === 'text'" class="blog-details__article-text">{{ content.text }}</p>
                        </div>
                    </div>
                </div>
            `
        }
    }
});
