// Import các thư viện và module cần thiết
const React = require('react');
const useState = require('react').useState;
const toast = require('react-toastify');
const avt = require('../../assets/img/avt.png');
const moment = require('moment');
require('moment/locale/vi'); // Thiết lập ngôn ngữ cho thư viện moment
const { useParams } = require('react-router-dom');
const userStore = require('store/userStore');
const { useQuery } = require('react-query');
const { deleteComment, getCommentsByUrl } = require('api/api<Main');
const useCreateComment = require('hooks/useCreateComment');

// Định nghĩa hàm ListComment
function ListComment() {
    // Sử dụng useState để quản lý trạng thái
    const [content, setContent] = useState("");
    const url = useParams().url || '';

    // Sử dụng useQuery để truy vấn dữ liệu từ máy chủ
    const { isLoading, data: comments, refetch } = useQuery('get-comments', () => getCommentsByUrl(url, { size: 20 }));

    // Sử dụng useCreateComment để tạo bình luận
    const { handleCreateComment } = useCreateComment(refetch, setContent);

    // Xử lý sự kiện khi người dùng tạo bình luận mới
    const onClickCreateComment = () => {
        const params = { urltruyen: url, content, parentId: "" }; // Thông tin bình luận
        handleCreateComment(params);
    }

    // Xử lý sự kiện khi người dùng xoá bình luận
    const onClickDeleteComment = (e) => {
        const user = userStore(state => state.user);
        if (user) { // Nếu đã đăng nhập thì mới đc phép xoá
            deleteComment({ id: e.currentTarget.id })
                .then(async (res) => {
                    toast.success(res.message, { hideProgressBar: true, pauseOnHover: false, autoClose: 1000 });
                    refetch();
                })
                .catch(err => {
                    toast.error(err.response.data.detail.message, { hideProgressBar: true, pauseOnHover: false, autoClose: 1000 });
                });
        }
    }

    return (
        <div className="comment__wrap">
            <h1>Bình luận {comments ? comments.length : 0}</h1>
            {/* Phần giao diện bình luận và biểu mẫu */}
            {/* ... (Phần JSX không được thay đổi) */}
        </div>
    );
}

moment.updateLocale('vi', { // Cài đặt ngôn ngữ cho moment
    relativeTime: {
        future: "trong %s",
        past: "%s trước",
        s: 'vài giây',
        ss: '%d giây',
        m: "1 phút",
        mm: "%d phút",
        h: "1 giờ",
        hh: "%d giờ",
        d: "1 ngày",
        dd: "%d ngày",
        w: "1 tuần",
        ww: "%d tuần",
        M: "1 tháng",
        MM: "%d tháng",
        y: "1 năm",
        yy: "%d năm"
    }
});

module.exports = ListComment; // Xuất ListComment để có thể sử dụng trong ứng dụng khác
