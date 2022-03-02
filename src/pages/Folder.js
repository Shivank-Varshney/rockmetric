import React from "react";

const Folder = () => {
  return (
    <>
      <div id="folder">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row my-3">
                <div className="col-12">
                  <div className="col-12 collectionHeading">
                    ADMIN PANEL/ List of Data
                  </div>
                </div>
                <div className="col-12">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search.."
                    className="search"
                  />
                </div>
                <div className="col-12 collectionHeading">Collection 1</div>
                {File1.map((val, index) => {
                  return (
                    <File id={index} name={val.name} property={val.property} />
                  );
                })}
              </div>
              <div className="row my-3">
                <div className="col-12 collectionHeading">Collection 2</div>
                {File2.map((val, index) => {
                  return (
                    <File id={index} name={val.name} property={val.property} />
                  );
                })}
              </div>
            </div>
            <div className="col-md-3">
              <div className="rightHeader">
                <button className="btn btn-primary">Upload Data</button>
              </div>
              <div className="rightBody">
                <div className="row justify-content-between">
                  <div className="col-4 left">
                    <svg
                      height="60"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.88387 6.68C3.84243 6.62777 3.79096 6.58436 3.7325 6.55232C3.67403 6.52028 3.60975 6.50025 3.54343 6.49342C3.47711 6.48658 3.41009 6.49308 3.34632 6.51253C3.28255 6.53198 3.22331 6.56399 3.1721 6.60667C3.12088 6.64935 3.07871 6.70185 3.04808 6.76107C3.01745 6.82028 2.99897 6.88503 2.99373 6.95149C2.98849 7.01796 2.9966 7.0848 3.01758 7.14809C3.03855 7.21137 3.07197 7.26982 3.11587 7.32L5.34887 10L3.11587 12.68C3.03474 12.7823 2.99681 12.9122 3.01018 13.042C3.02356 13.1719 3.08718 13.2913 3.18746 13.3749C3.28774 13.4585 3.41671 13.4995 3.54684 13.4892C3.67697 13.479 3.79792 13.4182 3.88387 13.32L5.99987 10.781L8.11587 13.321C8.20087 13.4228 8.32285 13.4868 8.45497 13.4987C8.52039 13.5046 8.58633 13.4975 8.64902 13.4779C8.71172 13.4583 8.76994 13.4266 8.82037 13.3845C8.8708 13.3424 8.91244 13.2908 8.94292 13.2326C8.97341 13.1744 8.99213 13.1108 8.99803 13.0454C9.00392 12.98 8.99688 12.914 8.97729 12.8513C8.9577 12.7887 8.92596 12.7304 8.88387 12.68L6.65087 10L8.88387 7.32C8.965 7.21775 9.00293 7.08782 8.98955 6.95798C8.97618 6.82814 8.91256 6.70867 8.81228 6.62511C8.712 6.54155 8.58303 6.50051 8.4529 6.51077C8.32277 6.52102 8.20182 6.58176 8.11587 6.68L5.99987 9.219L3.88387 6.679V6.68Z"
                        fill="#54B363"
                      />
                      <path
                        d="M12 14V4.5L7.5 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H10C10.5304 16 11.0391 15.7893 11.4142 15.4142C11.7893 15.0391 12 14.5304 12 14ZM7.5 3C7.5 3.39782 7.65804 3.77936 7.93934 4.06066C8.22064 4.34196 8.60218 4.5 9 4.5H11V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H7.5V3Z"
                        fill="#54B363"
                      />
                    </svg>
                  </div>
                  <div className="col-7 right">
                    <div className="heading">API LOGS</div>
                    <div className="text">Connection 1</div>
                    <div className="text">Size: 14.05 MB</div>
                    <div className="text">No. of File: 2</div>
                    <div className="text">Rows: 10 L</div>
                  </div>
                  <div className="col-12 heading">Data Files</div>
                  <div className="col-12 borderAll">
                    <div className="row">
                      <div className="col-6 head">File Name</div>
                      <div className="col-6 head">Sent Date</div>
                    </div>
                  </div>
                  <div className="col-12 borderAll">
                    <div className="row">
                      <div className="col-6 text">API_LOG_2022_22_1.csv</div>
                      <div className="col-6 text">2022-22-1</div>
                    </div>
                  </div>
                  <div className="col-12 borderAll">
                    <div className="row">
                      <div className="col-6 text">API_LOG_2022_22_1.csv</div>
                      <div className="col-6 text">2022-22-1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const File = (props) => {
  return (
    <>
      <div className="col-4" key={props.id}>
        <div className="folder">
          <svg
            height="30"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 2H9.414L7.707 0.293001C7.61426 0.200002 7.50406 0.126244 7.38273 0.0759616C7.2614 0.0256795 7.13134 -0.000135141 7 5.32017e-07H2C0.897 5.32017e-07 0 0.897 0 2V16C0 17.103 0.897 18 2 18H18C19.103 18 20 17.103 20 16V4C20 2.897 19.103 2 18 2ZM2 16V4H18L18.002 16H2Z"
              fill="#5C95F4"
            />
          </svg>
          <div className="detail">
            <div className="name">{props.name}</div>
            <div className="property">{props.property}</div>
          </div>
          <div className="option">
            <svg
              width="7"
              height="20"
              viewBox="0 0 7 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.226 3.112C6.22613 3.5208 6.14574 3.92563 5.98942 4.30337C5.8331 4.68111 5.60391 5.02435 5.31493 5.31352C5.02595 5.60268 4.68285 5.83209 4.30522 5.98865C3.92758 6.14522 3.52281 6.22587 3.114 6.226C2.7052 6.22613 2.30037 6.14574 1.92263 5.98942C1.54489 5.8331 1.20165 5.60391 0.912483 5.31493C0.623322 5.02595 0.393911 4.68285 0.237347 4.30522C0.0807826 3.92758 0.000131474 3.52281 1.60828e-07 3.114C-0.000265038 2.28838 0.327457 1.49647 0.91107 0.912484C1.49468 0.328496 2.28638 0.000265377 3.112 1.60849e-07C3.93762 -0.000265056 4.72953 0.327456 5.31352 0.91107C5.8975 1.49468 6.22573 2.28638 6.226 3.112V3.112Z"
                fill="#797979"
              />
              <path
                d="M3.11395 16.9081C4.83266 16.9081 6.22595 15.5148 6.22595 13.7961C6.22595 12.0774 4.83266 10.6841 3.11395 10.6841C1.39524 10.6841 0.00195312 12.0774 0.00195312 13.7961C0.00195312 15.5148 1.39524 16.9081 3.11395 16.9081Z"
                fill="#797979"
              />
              <path
                d="M3.11395 27.5941C4.83266 27.5941 6.22595 26.2008 6.22595 24.4821C6.22595 22.7634 4.83266 21.3701 3.11395 21.3701C1.39524 21.3701 0.00195312 22.7634 0.00195312 24.4821C0.00195312 26.2008 1.39524 27.5941 3.11395 27.5941Z"
                fill="#797979"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

const File1 = [
  {
    name: "API LOGS 2",
    property: "1 files, 14.05mb",
  },
  {
    name: "Downloads",
    property: "2 files, 14.05mb",
  },
  {
    name: "Downloads",
    property: "3 files, 14.05mb",
  },
];

const File2 = [
  {
    name: "Downloads",
    property: "4 files, 14.05mb",
  },
  {
    name: "Downloads",
    property: "5 files, 14.05mb",
  },
  {
    name: "Downloads",
    property: "6 files, 14.05mb",
  },
];

export default Folder;
