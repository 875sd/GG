import React from "react";
import "./DetailPage.css"; // ใช้ไฟล์ CSS สำหรับจัดสไตล์เพิ่มเติม

function DetailPage() {
  return (
    <div className="detail-page">
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          🌍 LOCATION
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                🏠 Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                📋 Detail
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ℹ️ About
              </a>
            </li>
          </ul>
          {/* Search Bar */}
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              🔍
            </button>
          </form>
        </div>
      </nav>

      {/* Image Section */}
      <div className="image-section">
        <img
          src="p6.jpg" // เปลี่ยนเป็น URL หรือไฟล์รูปจริง
          alt="Beach"
          className="background-image"
        />
        <div className="info">
          <h1>บาหลี</h1>
          <p>Indonesia</p>
          <div className="rating">
            <span>4.9 ★</span>
          </div>
        </div>
      </div>

      {/* Tab Menu */}
      <div className="tabs">
        <button className="tab active">🏨 Hotels</button>
        <button className="tab">🍽 Foods</button>
        <button className="tab">🎡 Activities</button>
      </div>

      {/* Details Section */}
      <div className="details-container">
        <h5>DETAILS</h5>
        <p>ห้องพักที่ตกแต่งเรียบหรู พร้อมระเบียงส่วนตัวที่มอบวิวทะเลสุดลูกหูลูกตา

เพลิดเพลินกับบรรยากาศอันเงียบสงบและโรแมนติกภายในห้องพักที่ถูกออกแบบมาอย่างพิถีพิถัน ด้วยสไตล์ที่ผสมผสานความทันสมัยเข้ากับความเป็นธรรมชาติอย่างลงตัว เฟอร์นิเจอร์ทุกชิ้นถูกเลือกสรรมาเพื่อมอบความสะดวกสบายสูงสุด

ระเบียงส่วนตัวที่กว้างขวางเปิดโอกาสให้คุณได้สัมผัสวิวทะเลที่งดงามทั้งในยามเช้าและยามเย็น พร้อมทั้งการนั่งรับลมทะเลที่สดชื่น เพลินไปกับการชมพระอาทิตย์ตกที่แสนจะตราตรึงใจ

สิ่งอำนวยความสะดวกภายในห้อง:

เตียงขนาดคิงไซส์พร้อมชุดเครื่องนอนระดับพรีเมียม
ห้องน้ำในตัวที่มีอ่างอาบน้ำขนาดใหญ่และฝักบัวแบบเรนชาวเวอร์
มินิบาร์และเครื่องดื่มต้อนรับฟรี
สมาร์ททีวีพร้อมช่องสตรีมมิ่ง
บริการ Wi-Fi ความเร็วสูง
สถานที่พักผ่อนในฝันแห่งนี้เหมาะสำหรับการหลีกหนีความวุ่นวายและสัมผัสประสบการณ์การพักผ่อนที่สมบูรณ์แบบ!</p>

        {/* Image Cards */}
        <div className="card-images-container">
          <div className="card">
            <img src="p4.jpg" alt="Hotel Room" className="card-image" />
            <h5>HOTEL</h5>
            <p>ห้องพักที่ตกแต่งเรียบหรูห้องพักที่ออกแบบมาอย่างพิถีพิถันในสไตล์เรียบหรู มอบความสะดวกสบายและความเป็นส่วนตัวอย่างเต็มที่ มีระเบียงส่วนตัวให้คุณได้ชมวิวทะเลอย่างใกล้ชิด เป็นสถานที่ที่เหมาะสำหรับการพักผ่อนอย่างแท้จริง</p>
          </div>
          <div className="card">
            <img src="p8.jpg" alt="Pool View" className="card-image" />
            <h5>VIEW</h5>
            <p>ห้องพักที่ตั้งอยู่ในทำเลที่สามารถมองเห็นวิวทะเลอันกว้างใหญ่และวิวภูเขาที่สวยงามได้อย่างชัดเจน จากระเบียงส่วนตัว คุณสามารถเพลิดเพลินกับการชมพระอาทิตย์ขึ้นจากทะเลและสัมผัสกับอากาศสดชื่นในทุกๆ เช้า</p>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="button-container">
        <button className="btn btn-primary">➡️ Continue</button>
      </div>
    </div>
  );
}

export default DetailPage;