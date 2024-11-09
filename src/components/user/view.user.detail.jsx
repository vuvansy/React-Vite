/* eslint-disable react/prop-types */
import { Drawer } from "antd";

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
    // console.log(dataDetail);
    return (
        <>
            <Drawer
                title="Chi tết User"
                onClose={() => {
                    setDataDetail(null);
                    setIsDetailOpen(false);
                }}
                open={isDetailOpen}
            >
                {dataDetail ? (
                    <>
                        <p>id: {dataDetail._id}</p>
                        <br></br>
                        <p>FullName: {dataDetail.fullName}</p>
                        <br></br>
                        <p>Email: {dataDetail.email}</p>
                        <br></br>
                        <p>Phone Number: {dataDetail.phone}</p>
                    </>
                ) : (
                    <>
                        <p>Không có dữ liệu</p>
                    </>
                )}
            </Drawer>
        </>
    );
};

export default ViewUserDetail;
