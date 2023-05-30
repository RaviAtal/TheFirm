import React, { useState } from "react";
import line_circle_yellow from "../assets/img/png/line_with_circle_new.png";
import line_circle_gry from "../assets/img/png/line_with_circle_newGRY.png";
import brand_img from "../assets/img/png/brand_img.png";
import speaker from "../assets/img/svg/speaker_brand.svg";

function ChooseUs() {
  const [active, setactive] = useState(2);
  return (
    <>
      <section className="bg_chooseUs py-5">
        <div className="container py-5">
          <h2 className=" ff_Nunito fw_900 fs_m lh_133percent text-center position-relative z_index_1 m-0 m-1">
            Reason to Choose
            <span className="us_line position-relative"> Us</span>
          </h2>
          <div className=" d-flex justify-content-center">
            <p className=" ff_Nunito text-center fs_xsm text_blacker leter_spacer_p2 col-8 pt-4 m-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
          {/*scrool bar  */}
          <div className="scroll w_300px_over_f_x_500_scrl scroll_none pb-3">
            <div className=" d-xl-flex justify-content-center">
              <div className="d-flex justify-content-between mt-5 pt-1 col-lg-10 gap-5">
                {/* 1 */}
                <div className=" position-relative z_index_0 ms-5 me-3">
                  <img
                    onClick={() => setactive(1)}
                    className={
                      active === 1
                        ? "position-absolute right_25percent bottom_50percent z_index_-1 d-none"
                        : "position-absolute right_25percent bottom_50percent z_index_-1 d-flex"
                    }
                    src={line_circle_gry}
                    alt="line_circle_gry"
                  />
                  <img
                    onClick={() => setactive(1)}
                    className={
                      active === 1
                        ? "position-absolute right_20 bottom_50percent z_index_-1 d-flex"
                        : "position-absolute right_20 bottom_50percent z_index_-1 d-none"
                    }
                    src={line_circle_yellow}
                    alt="line_circle_yellow"
                  />
                  <button
                    onClick={() => setactive(1)}
                    className={
                      active === 1
                        ? "btn otions_BOX ff_Nunito fw-bold fs_xsm z_index_1 px-4  otions_BOX_yelow text-nowrap"
                        : "btn otions_BOX text_gray ff_Nunito fw-bold fs_xsm z_index_1 px-4   otions_BOX_hover text-nowrap"
                    }
                  >
                    Market Research
                  </button>
                </div>
                {/* 2 */}
                <div className="position-relative z_index_0 mx-3">
                  <img
                    onClick={() => setactive(2)}
                    className={
                      active === 2
                        ? "position-absolute right_15percent bottom_50percent z_index_-1 d-none"
                        : "position-absolute right_15percent bottom_50percent z_index_-1 d-flex"
                    }
                    src={line_circle_gry}
                    alt="line_circle_gry"
                  />
                  <img
                    onClick={() => setactive(2)}
                    className={
                      active === 2
                        ? "position-absolute right_10percenty bottom_50percent z_index_-1 d-flex"
                        : "position-absolute right_10percenty bottom_50percent z_index_-1 d-none"
                    }
                    src={line_circle_yellow}
                    alt="line_circle_yellow"
                  />
                  <button
                    onClick={() => setactive(2)}
                    className={
                      active === 2
                        ? "btn otions_BOX ff_Nunito fw-bold fs_xsm z_index_1 px-4 w_157 otions_BOX_yelow text-nowrap"
                        : "btn otions_BOX text_gray ff_Nunito fw-bold fs_xsm z_index_1 px-4 w_157  otions_BOX_hover text-nowrap"
                    }
                  >
                    Branding
                  </button>
                </div>
                {/* 3 */}
                <div className="position-relative z_index_0 mx-3">
                  {" "}
                  <img
                    onClick={() => setactive(3)}
                    className={
                      active === 3
                        ? "position-absolute right_15percent bottom_50percent z_index_-1 d-none"
                        : "position-absolute right_15percent bottom_50percent z_index_-1 d-flex"
                    }
                    src={line_circle_gry}
                    alt="line_circle_gry"
                  />
                  <img
                    onClick={() => setactive(3)}
                    className={
                      active === 3
                        ? "position-absolute right_10percenty bottom_50percent z_index_-1 d-flex"
                        : "position-absolute right_10percenty bottom_50percent z_index_-1 d-none"
                    }
                    src={line_circle_yellow}
                    alt="line_circle_yellow"
                  />
                  <button
                    onClick={() => setactive(3)}
                    className={
                      active === 3
                        ? "btn otions_BOX ff_Nunito fw-bold fs_xsm z_index_1 px-4 w_157 otions_BOX_yelow text-nowrap"
                        : "btn otions_BOX text_gray ff_Nunito fw-bold fs_xsm z_index_1 px-4 w_157  otions_BOX_hover text-nowrap"
                    }
                  >
                    Reporting
                  </button>
                </div>
                {/*4  */}
                <div className="position-relative z_index_0 mx-3">
                  {" "}
                  <img
                    onClick={() => setactive(4)}
                    className={
                      active === 4
                        ? "position-absolute right_15percent bottom_50percent z_index_-1 d-none"
                        : "position-absolute right_15percent bottom_50percent z_index_-1 d-flex"
                    }
                    src={line_circle_gry}
                    alt="line_circle_gry"
                  />
                  <img
                    onClick={() => setactive(4)}
                    className={
                      active === 4
                        ? "position-absolute right_10percenty bottom_50percent z_index_-1 d-flex"
                        : "position-absolute right_10percenty bottom_50percent z_index_-1 d-none"
                    }
                    src={line_circle_yellow}
                    alt="line_circle_yellow"
                  />
                  <button
                    onClick={() => setactive(4)}
                    className={
                      active === 4
                        ? "btn otions_BOX ff_Nunito fw-bold fs_xsm z_index_1 px-4 w_157 otions_BOX_yelow text-nowrap"
                        : "btn otions_BOX text_gray ff_Nunito fw-bold fs_xsm z_index_1 px-4 w_157  otions_BOX_hover text-nowrap"
                    }
                  >
                    Data Analysis
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* item */}
          <div
            onClick={() => setactive(2)}
            className={
              active === 2
                ? "bg-white rounded-5 py-5 px-4 mt-5 row d-flex"
                : "bg-white rounded-5 py-5 px-4 mt-5 row d-none"
            }
          >
            <div className="col-lg-6">
              <div className="p-2 box_shadow rounded-5">
                <img
                  className="w-100 rounded-5"
                  src={brand_img}
                  alt="brand_img"
                />
              </div>
            </div>
            {/* text */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className=" ">
                {/* brand */}
                <div className="d-flex align-items-center">
                  <div className=" bg_yellow p_30 rounded_50percent position-relative">
                    <img
                      className="w-75 position-absolute top_9 right_8 speaker_animation"
                      src={speaker}
                      alt="speaker"
                    />
                  </div>
                  <h6 className=" ff_Nunito fw-bold fs_30  position-relative z_index_1 m-0 m-1 Branding_line position-relative m-0 ms-3">
                    Branding
                  </h6>
                </div>
                <div className="ms-4 ps-5 mt-3">
                  <p className=" m-0 ff_Lora fs_xsm leter_spacer_p2 text_blacker pe-4 mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button
                    className="bg_blacker box_shadow_readmore rounded-2 text-white
                   ff_Nunito fs_xsm text-nowrap px-4 py-2 mt-4 read_nore_hover"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setactive(1)}
            className={
              active === 1
                ? "bg-white rounded-5 py-5 px-4 mt-5 row d-flex"
                : "bg-white rounded-5 py-5 px-4 mt-5 row d-none"
            }
          >
            <div className="col-lg-6">
              <div className="p-2 box_shadow rounded-5">
                <img
                  className="w-100 rounded-5"
                  src={brand_img}
                  alt="brand_img"
                />
              </div>
            </div>
            {/* text */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className=" ">
                {/* Market Research */}
                <div className="d-flex align-items-center">
                  <div className=" bg_yellow p_30 rounded_50percent position-relative">
                    <img
                      className="w-75 position-absolute top_9 right_8 speaker_animation"
                      src={speaker}
                      alt="speaker"
                    />
                  </div>
                  <h6 className=" ff_Nunito fw-bold fs_30  position-relative z_index_1 m-0 m-1 Branding_line position-relative m-0 ms-3">
                    Market Research
                  </h6>
                </div>
                <div className="ms-4 ps-5 mt-3">
                  <p className=" m-0 ff_Lora fs_xsm leter_spacer_p2 text_blacker pe-4 mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button
                    className="bg_blacker box_shadow_readmore rounded-2 text-white
                   ff_Nunito fs_xsm text-nowrap px-4 py-2 mt-4 read_nore_hover"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setactive(3)}
            className={
              active === 3
                ? "bg-white rounded-5 py-5 px-4 mt-5 row d-flex"
                : "bg-white rounded-5 py-5 px-4 mt-5 row d-none"
            }
          >
            <div className="col-lg-6">
              <div className="p-2 box_shadow rounded-5">
                <img
                  className="w-100 rounded-5"
                  src={brand_img}
                  alt="brand_img"
                />
              </div>
            </div>
            {/* text */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className=" ">
                {/* Reporting */}
                <div className="d-flex align-items-center">
                  <div className=" bg_yellow p_30 rounded_50percent position-relative">
                    <img
                      className="w-75 position-absolute top_9 right_8 speaker_animation"
                      src={speaker}
                      alt="speaker"
                    />
                  </div>
                  <h6 className=" ff_Nunito fw-bold fs_30  position-relative z_index_1 m-0 m-1 Branding_line position-relative m-0 ms-3">
                    Reporting
                  </h6>
                </div>
                <div className="ms-4 ps-5 mt-3">
                  <p className=" m-0 ff_Lora fs_xsm leter_spacer_p2 text_blacker pe-4 mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button
                    className="bg_blacker box_shadow_readmore rounded-2 text-white
                   ff_Nunito fs_xsm text-nowrap px-4 py-2 mt-4 read_nore_hover"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setactive(4)}
            className={
              active === 4
                ? "bg-white rounded-5 py-5 px-4 mt-5 row d-flex"
                : "bg-white rounded-5 py-5 px-4 mt-5 row d-none"
            }
          >
            <div className="col-lg-6">
              <div className="p-2 box_shadow rounded-5">
                <img
                  className="w-100 rounded-5"
                  src={brand_img}
                  alt="brand_img"
                />
              </div>
            </div>
            {/* text */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className=" ">
                {/* Data Analysis */}
                <div className="d-flex align-items-center">
                  <div className=" bg_yellow p_30 rounded_50percent position-relative">
                    <img
                      className="w-75 position-absolute top_9 right_8 speaker_animation"
                      src={speaker}
                      alt="speaker"
                    />
                  </div>
                  <h6 className=" ff_Nunito fw-bold fs_30  position-relative z_index_1 m-0 m-1 Branding_line position-relative m-0 ms-3">
                    Data Analysis
                  </h6>
                </div>
                <div className="ms-4 ps-5 mt-3">
                  <p className=" m-0 ff_Lora fs_xsm leter_spacer_p2 text_blacker pe-4 mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button
                    className="bg_blacker box_shadow_readmore rounded-2 text-white
                   ff_Nunito fs_xsm text-nowrap px-4 py-2 mt-4 read_nore_hover"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
