import "./App.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PostHeader from "./components/PostHeader";
import Comment from "./components/Comment";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ImageSlider from "./components/ImageSlider";
import AvImg from "./assets/images/자산 9.png";
import AvImg1 from "./assets/images/자산 10.png";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <ArrowBackIosNewIcon style={{ color: "#313B49", fontSize: "16px" }} />
        </div>
        <div>
          <h1>자유톡</h1>
        </div>
        <div>
          <NotificationsNoneIcon
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
            <CheckCircleIcon
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
                지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
                혹시 어떤 상품이 제일 괜찮았어?
              </h6>
            </div>
            <div>
              <h6>
                후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
                제일 재밌었다던데 맞아???
              </h6>
            </div>
            <div>
              <h6>
                올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
                아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
                있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
              </h6>
            </div>
          </div>
          <div className="lowerMiddle">
            <div className="chips">
              <Chip className="chipStyle" label="#2023" variant="outlined" />
              <Chip
                className="chipStyle"
                label="#TODAYISMONDAY"
                variant="outlined"
              />
              <Chip className="chipStyle" label="#TOP" variant="outlined" />
              <Chip className="chipStyle" label="#POPS!" variant="outlined" />
              <Chip className="chipStyle" label="#WOW" variant="outlined" />
              <Chip className="chipStyle" label="#ROW" variant="outlined" />
            </div>
          </div>
          <div className="imageSlider">
            <div className="imageSLideContainer">
              <ImageSlider />
            </div>
            <Comment
              heart={<FavoriteBorderIcon style={{ fontSize: "19px" }} />}
              bookmark={<BookmarkBorderIcon style={{ fontSize: "19px" }} />}
              horizon={<MoreHorizIcon style={{ fontSize: "19px" }} />}
              sms={<SmsOutlinedIcon style={{ fontSize: "19px" }} />}
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
                <MoreHorizIcon style={{ fontSize: "19px", color: "#AFB9CA" }} />
              }
              check={
                <CheckCircleIcon
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
                heart={<FavoriteBorderIcon style={{ fontSize: "19px" }} />}
                sms={<SmsOutlinedIcon style={{ fontSize: "19px" }} />}
                booknumber={"5"}
              />
              <div style={{ paddingTop: "8px" }}>
                <PostHeader
                  back={"#FBB0AE"}
                  title={"ㅇㅅㅇ"}
                  AvImg={AvImg1}
                  button={
                    <MoreHorizIcon
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
                  heart={<FavoriteBorderIcon style={{ fontSize: "19px",marginLeft:42 }} />}
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footerleft">
              <div>
                <ImageOutlinedIcon
                  style={{ fontSize: "19px", color: "#919EB6" }}
                />
              </div>
              <div>
                <span style={{ color: "#AFB9CA" }}>댓글을 남겨주세요.</span>
              </div>
            </div>
            <div className="footerright">
              <span style={{ color: "#AFB9CA" }}>등록</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
