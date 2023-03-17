import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="ladi-footer">
      <div className="container">
        <div className="ladi-footer-wrap">
          <div className="ladi-footer-logo">
            <div className="ladi-footer-logo__bgimg"></div>
          </div>
          <div className="ladi-footer-company">
            <h3>CÔNG TY CẢNG BIỂN QUỐC TẾ CHU LAI</h3>
          </div>
          <div className="ladi-footer-contact">
            <div className="ladi-footer-contact-row">
              <div className="ladi-footer-contact-col">
                <h6>VĂN PHÒNG CHU LAI</h6>
                <p>Khu CN Tam Hiệp, Tam Hiệp, Núi Thành, Quảng Nam</p>
                <p>Tel: 0235.3567.666</p>
                <p>Fax: 0235.3567.444</p>
                <p>Hotline: 0933.805.345</p>
              </div>
              <div className="ladi-footer-contact-col">
                <h6>VĂN PHÒNG HỒ CHÍ MINH</h6>
                <p>
                  Toà nhà Sadora, Số 2, đường số 13, P.Thủ Thiêm, Thủ Đức, TP.
                  Hồ Chí Minh
                </p>
                <p>Tel: 028.3636.4302/4304/4305</p>
                <p>Fax: 028.39977.742</p>
                <p>Hotline: 0938.906.618</p>
              </div>
              <div className="ladi-footer-contact-col">
                <h6>VĂN PHÒNG HÀ NỘI</h6>
                <p>386 Nguyễn Văn Linh, P. Sài Đông, Q. Long Biên, Hà Nội</p>
                <p>Tel: 024.399.77.824</p>
                <p>Fax: 024.3674.0219</p>
                <p>Hotline: 0933.805.995</p>
              </div>
            </div>
            <div className="ladi-footer-line"></div>
            <div className="ladi-footer-connect">
              <div className="ladi-footer-phone">
                <div className="ladi-footer-phone__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1408 1896.0833"
                    class=""
                    fill="rgba(255, 255, 255, 1)"
                  >
                    {" "}
                    <path d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5T959 1520t-47.5-14.5T856 1485t-49-18q-98-35-175-83-128-79-264.5-215.5T152 904q-48-77-83-175-3-9-18-49t-20.5-55.5T16 577 3.5 519.5 0 467q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path>{" "}
                  </svg>
                </div>
                <div className="ladi-footer-phone__number">
                  <span>0933.805.345</span>
                </div>
              </div>
              <div className="ladi-footer-email">
                <div className="ladi-footer-email__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1792 1896.0833"
                    class=""
                    fill="rgba(255, 255, 255, 1)"
                  >
                    {" "}
                    <path d="M1792 710v794q0 66-47 113t-113 47H160q-66 0-113-47T0 1504V710q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38T639 1015q-91-64-262-182.5T172 690q-62-42-117-115.5T0 438q0-78 41.5-130T160 256h1472q65 0 112.5 47t47.5 113z"></path>{" "}
                  </svg>
                </div>
                <div className="ladi-footer-email__acc">
                  <span>thilogi@thaco.com.vn</span>
                </div>
              </div>
              <div className="ladi-footer-follow">
                <div className="ladi-footer-follow__logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.0833"
                    class=""
                    fill="rgba(255, 255, 255, 1)"
                  >
                    {" "}
                    <path d="M1248 128q119 0 203.5 84.5T1536 416v960q0 119-84.5 203.5T1248 1664h-188v-595h199l30-232h-229V689q0-56 23.5-84t91.5-28l122-1V369q-63-9-178-9-136 0-217.5 80T820 666v171H620v232h200v595H288q-119 0-203.5-84.5T0 1376V416q0-119 84.5-203.5T288 128h960z"></path>{" "}
                  </svg>
                </div>
                <div className="ladi-footer-follow__logo ladi-footer-follow__logo__size">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110%"
                    height="110%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1792 1896.0833"
                    class=""
                    fill="rgba(255, 255, 255, 1)"
                  >
                    {" "}
                    <path d="M1280 896q0-37-30-54L738 522q-31-20-65-2-33 18-33 56v640q0 38 33 56 16 8 31 8 20 0 34-10l512-320q30-17 30-54zm512 0q0 96-1 150t-8.5 136.5T1760 1330q-16 73-69 123t-124 58q-222 25-671 25t-671-25q-71-8-124.5-58T31 1330q-14-65-21.5-147.5T1 1046 0 896t1-150 8.5-136.5T32 462q16-73 69-123t124-58q222-25 671-25t671 25q71 8 124.5 58t69.5 123q14 65 21.5 147.5T1791 746t1 150z"></path>{" "}
                  </svg>
                </div>
                <div className="ladi-footer-follow__logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.0833"
                    class=""
                    fill="rgba(255, 255, 255, 1)"
                  >
                    {" "}
                    <path d="M829 1218q0 76-58.5 112.5T631 1367q-41 0-80.5-9.5T475 1329t-58-53-22-78q0-46 25-80t65.5-51.5 82-25 84.5-7.5q20 0 31 2 2 1 23 16.5t26 19 23 18 24.5 22 19 22.5 17 26 9 26.5 4.5 31.5zm-74-545q0 60-33 99.5T630 812q-53 0-93-42.5T479.5 673 462 567q0-61 32-104t92-43q53 0 93.5 45t58 101T755 673zm106-257l88-64H684q-85 0-161 32t-127.5 98T344 635q0 93 64.5 154.5T567 851q22 0 43-3-13 29-13 54 0 44 40 94-175 12-257 63-47 29-75.5 73t-28.5 95q0 43 18.5 77.5T343 1361t69 37 77.5 21 76.5 6q60 0 120.5-15.5t113.5-46 86-82.5 33-117q0-49-20-89.5t-49-66.5-58-47.5-49-44-20-44.5 15.5-42.5T776 790t44-42 37.5-59.5T873 606q0-60-22.5-99.5T778 416h83zm291 448h128v-64h-128V672h-64v128H960v64h128v160h64V864zm384-448v960q0 119-84.5 203.5T1248 1664H288q-119 0-203.5-84.5T0 1376V416q0-119 84.5-203.5T288 128h960q119 0 203.5 84.5T1536 416z"></path>{" "}
                  </svg>
                </div>
                <div className="ladi-footer-follow__logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.0833"
                    class=""
                    fill="rgba(255, 255, 255, 1)"
                  >
                    {" "}
                    <path d="M349 625v991H19V625h330zm21-306q1 73-50.5 122T184 490h-2q-82 0-132-49T0 319q0-74 51.5-122.5T186 148t133 48.5T370 319zm1166 729v568h-329v-530q0-105-40.5-164.5T1040 862q-63 0-105.5 34.5T871 982q-11 30-11 81v553H531q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5T1157 602q171 0 275 113.5t104 332.5z"></path>{" "}
                  </svg>
                </div>
              </div>
            </div>

            <div class="ladi-fotter-headline">
              <p>COPYRIGHT © 2022&nbsp; THILOGI. ALL RIGHT RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
