/* eslint-disable react/prop-types */
import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
    // console.log(dataDetail);
    return (
        <>
            <Drawer
                width={"40vw"}
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
                        <br></br>
                        <p>Avatar</p>
                        <div>
                            <img
                                height={200}
                                width={200}
                                src={`${
                                    import.meta.env.VITE_BACKEND_URL
                                }/images/avatar/${dataDetail.avatar}`}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="btnUpload"
                                style={{
                                    display: "block",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    background: "orange",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Upload Avatar
                            </label>
                            <input type="file" hidden id="btnUpload" />
                        </div>
                        
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
