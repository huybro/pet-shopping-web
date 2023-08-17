import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-text">
                <h5>KIM BINH MINH CO.,LTD</h5>
                <h7>Address : 122/21 Pho Quang Street, Ward 9, Phu Nhuan District, Ho Chi Minh City</h7>
                <h7>Direct phone  : +84 28 39973887</h7>
                <h7>Mobile: +84 903.717.450</h7>
                <h7>Email : kimbinhminh@gmail.com / kimbinhminh@kbm.vn</h7>
                <h7>Website: www.kbm.vn</h7>
                <h7>https://kimbinhminh.trustpass.alibaba.com</h7>
            </div>
            <div className='footer-text'>
                <h5>Link customer support</h5>
                <ul>
                    <li>Shopping guide</li>
                    <li>Payments</li>
                    <li>Information security policy</li>
                </ul>
            </div>
            <div className="footer-text">
                <h5>Sign Newsletter</h5>
                <h7>Update new information, events, promotions.</h7>
                <div className = 'email-signup'>
                    <form method="post"  action="send.php">
                        <input name="email" placeholder="Email signup" ></input>
                        <button type="submit" name="subscribe"><i class="fa-regular fa-paper-plane"></i></button>
                    </form>
                </div>

            </div>
        </div>
    )
}