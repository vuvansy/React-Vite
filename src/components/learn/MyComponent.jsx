import "./style.css";
/**
 * 
 JSX cho phép bạn code HTML trong file Javascript
 1.Single Root
 JSX chỉ có 1 cha duy nhất
 2. Fragment
 Fragment (mảnh vỡ) giúp bạn viết code ngắn đi, và không render “thừa html”
 3. Sử dụng CSS
 Lưu ý: className
 Không dùng từ “class” với JSX, vì class là  keyword “lớp” của javascript
 Lưu ý về inline style (viết theo quy tắc của object)
 */

const MyComponent = () => {
    return (
        <>
            <div>My Component</div>
            <div className="child" style={{ borderRadius: "10px" }}>
                child
            </div>
        </>
    );
};

export default MyComponent;
