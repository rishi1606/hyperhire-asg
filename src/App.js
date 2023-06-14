import "./App.css";
import { Chip } from "@mui/material";
import PostHeader from "./components/PostHeader";
import Comment from "./components/Comment";
import ImageSlider from "./components/ImageSlider";
import AvImg from "./assets/images/자산 9.png";
import AvImg1 from "./assets/images/자산 10.png";
import { chip, title1, title2, title3 } from "./Constants/constants";
import Footer from "./components/Footer";
import { Icons } from "./components/icon";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <Icons.ArrowBackIosNewIcon style={{ color: "#313B49", fontSize: "16px" }} />
        </div>
        <div>
          <h1>자유톡</h1>
        </div>
        <div>
          <Icons.NotificationsNoneIcon
            style={{ color: "#AFB9CA", fontSize: "19px" }}
          />
        </div>
      </div>
      <div className="middlerow">
        <PostHeader
          back={"#FFDCA9"}
          subTitle={"165cm . 53Kg"}
          button={<button>팔로우</button>}
          title={"안녕 나 응애"}
          AvImg={AvImg}
          check={
            <Icons.CheckCircleIcon
              style={{
                height: "14px",
                width: "14px",
                color: "#01B99F",
              }}
            />
          }
        />
        <div className="content">
          <div className="content-head">
            <h6>지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</h6>
          </div>
          <div className="content-details">
            <div>
              <h6>
                {title1}
              </h6>
            </div>
            <div>
              <h6>
                {title2}
              </h6>
            </div>
            <div>
              <h6>
               {title3}
              </h6>
            </div>
          </div>
          <div className="lowerMiddle">
            <div className="chips">
                  {chip && chip.map((data,index)=>(
                     <Chip key={index} className="chipStyle" label={data.name} variant="outlined" />
                  ))}
            </div>
          </div>
          <div className="imageSlider">
            <div className="imageSLideContainer">
              <ImageSlider />
            </div>
            <Comment
              heart={<Icons.FavoriteBorderIcon style={{ fontSize: "19px" }} />}
              bookmark={<Icons.BookmarkBorderIcon style={{ fontSize: "19px" }} />}
              horizon={<Icons.MoreHorizIcon style={{ fontSize: "19px" }} />}
              sms={<Icons.SmsOutlinedIcon style={{ fontSize: "19px" }} />}
              number={"5"}
              booknumber={"5"}
            />
          </div>
          <div className="user-actions">
            <PostHeader
              back={"#FFDCA9"}
              title={"안녕 나 응애 "}
              AvImg={AvImg}
              button={
                <Icons.MoreHorizIcon style={{ fontSize: "19px", color: "#AFB9CA" }} />
              }
              check={
                <Icons.CheckCircleIcon
                  style={{
                    height: "14px",
                    width: "14px",
                    color: "#01B99F",
                  }}
                />
              }
            />
            <div className="user-commented">
              <span className="secondSpan">
                어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
                아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런
                제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브
                리뷰 올라온다고 하니 꼭 봐주세용~!
              </span>
              <Comment
                heart={<Icons.FavoriteBorderIcon style={{ fontSize: "19px" }} />}
                sms={<Icons.SmsOutlinedIcon style={{ fontSize: "19px" }} />}
                booknumber={"5"}
              />
              <div style={{ paddingTop: "8px" }}>
                <PostHeader
                  back={"#FBB0AE"}
                  title={"ㅇㅅㅇ"}
                  AvImg={AvImg1}
                  button={
                    <Icons.MoreHorizIcon
                      style={{ fontSize: "19px", color: "#AFB9CA" }}
                    />
                  }
                />
                <div style={{paddingTop:10,marginLeft:42}}>
                  <span className="secondSpan">
                    오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
                  </span>
                </div>
                <Comment
                  heart={<Icons.FavoriteBorderIcon style={{ fontSize: "19px",marginLeft:42 }} />}
                />
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
