const rootElement = document.getElementById('root');

// var h1Element = document.createElement('h1');
// h1Element.innerText = 'Hello guys!';
// h1Element.className = 'heading';
// h1Element.title = 'Hello';
// rootElement.appendChild(h1Element);

// const h1React = React.createElement('h1', {title: 'Hello', className: 'heading'}, 'Hello Guys!');

// console.dir(rootElement);
// console.dir(h1React);

// var ulElement = document.createElement('ul');
// var li1Element = document.createElement('li');
// var li2Element = document.createElement('li');
// li1Element.innerText = 'Javascript';
// li2Element.innerText = 'HTML';
// rootElement.appendChild(ulElement);
// ulElement.appendChild(li1Element);
// ulElement.appendChild(li2Element);

// const course = [
//     {
//         name: 'HTML, CSS'
//     },
//     {
//         name: 'Responsive web design'
//     },
//     {
//         name: 'ReactJS'
//     },
//     {
//         name: 'Javascript'
//     },
// ]

// const html = course.map ((course) => {return <li>{course.name}</li>});

// const ulReact = React.createElement (
//     'ul', 
//     null, 
//     React.createElement('li', null, 'Javascript'),
//     React.createElement('li', null, 'ReactJS'))
// console.dir(ulElement);
// console.log(ulReact);

// ReactDOM.render(html, rootElement);

// var divReact = React.createElement (
//     'div', 
//     {className: 'post-item'},
//     React.createElement('h2', {title: 'Học React tại F8'},'Học ReactJS'),
//     React.createElement('p', null, 'Học ReactJS từ cơ bản đến nâng cao')
// )

// console.log(divReact);
// ReactDOM.render(divReact, rootElement);

// const PostItem = () => {
//     return (
//     <div className="post-item">
//         <img src="" alt="Lỗi hình ảnh"/>
//         <h2 className="post-title">C#(.NET) - Tương tác với file Excel</h2>
//         <h2 className="post-desc">Bạn có kiến thức ngôn ngữ</h2>
//         <h2 className="post-public">Một ngày đẹp trời như bao ngày đẹp trời</h2>
//     </div>
// )}

// const app = (
//     <div className="post-lists">
//         <PostItem></PostItem>
//         <PostItem></PostItem>
//         <PostItem></PostItem>
//         <PostItem></PostItem>
//     </div>
// );

// ReactDOM.render(app, rootElement); 

const courses = [
  {
    title: "Kiến Thức Nhập Môn IT",
    description: "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    action_course: false,
  },
  {
    title: "HTML CSS từ Zero đến Hero",
    description: "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    action_course: false,
  },
  {
    title: "Responsive Với Grid System",
    description: "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
    action_course: false,
  },
  {
    title: "Lập Trình JavaScript Cơ Bản",
    description: "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    action_course: false,
  },
  {
    title: "Lập Trình JavaScript Nâng Cao",
    description: "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
    action_course: false,
  },
  {
    title: "Làm việc với Terminal & Ubuntu",
    description: "Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png",
    action_course: false,
  },
  {
    title: "Xây Dựng Website với ReactJS",
    description: "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
    action_course: false,
  },
  {
    title: "Node & ExpressJS",
    description: "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
    image_url: "https://files.fullstack.edu.vn/f8-prod/courses/6.png",
    action_course: false,
  }
];

const Button = (props) => {
    return (
        <button onClick={() => {props.check_Course()}}>{props.title}</button>
    )
}

const CourseItem = (props) => {
    const checkCourse = () => {
        if(props.action_course === false)
            alert("Khóa học này bạn chưa đăng ký! Bạn cần đăng ký khóa học để được cấp quyền vào lớp ^-^");
        else
            alert("Chào mừng bạn đã đến lớp ^-^");
    }
    return (
        <div className="course-item">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img width="50%" src={props.image_url} alt="404 error" />
            <br></br>
            <button onClick={() => {props.onClick(props)}}>Đăng ký ngay</button>
            <br></br>
            <Button
                title="Tham gia lớp học"
                check_Course={checkCourse}
            />
        </div>
)}

const App = () => {
    const handleClick = (props) => {
        alert("Bạn đã đăng ký khóa học " + props.title + " thành công!")
        props.action_course = true;
    }
    return (
        <div className="course-list">
            {courses.map((course) => {
                return (
                    <CourseItem
                        title= {course.title}
                        description={course.description}
                        image_url={course.image_url}
                        action_course={course.action_course}
                        onClick={handleClick}
                    />
            )})}
        </div>
    )
};

ReactDOM.render(<App />,rootElement);