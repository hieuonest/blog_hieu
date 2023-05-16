import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const data = [
  {
    title: "Download all images trên website sử dụng javascript",
    slug: "download-all-img-js",
    content: `<section id="portfolio-details" class="portfolio-details">
<div class="container">
    <div class="portfolio-info">
        <div>
            <h3>1. Vấn đề</h3>
            <div>
                <p>Chắc hẳn trong thực tế khi làm các dự án việc phát sinh tính năng tải ảnh là rất nhiều. Ví dụ như việc đơn giản là tải 01 ảnh chúng ta có thể làm như thế này. Như đoạn code dưới quá là đơn giản đúng không, ngay trong thẻ <b><code>&lt;a&gt;</code></b> chúng ta thể thuộc tính <i>"download"</i> sẽ được tải xuống khi người dùng nhấp vào liên kết.</p>
                <pre class="language-none" data-filename="">                            <code class="language-none">
&lt;a href="/images/myw3schoolsimage.jpg" download&gt;
&lt;img src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142"&gt;
&lt;/a&gt;
                    </code>
                </pre>
                <p>Nhìn qua ta thấy rõ việc tải ảnh là đơn giản đúng không. Vậy nếu ta phát sinh nhu cầu muốn click 1 lần mà tải được all ảnh thì sao? Tính năng đó không phải là một tính năng khó, đặc biệt đối với những bạn đã quá "lão luyện" javascript, nhưng đối với một số bạn "newbie" thì cũng phải mất chút thời gian tìm kiếm các giải quyết. Vậy nên hãy để mình giúp bạn. Bài viết này của mình sẽ không thiên về giải thuật hay công nghệ mà chỉ đơn giản là chia sẻ cách làm của mình để có thể giúp các bạn xử lý những tính năng này nhanh hơn. Những bạn đã quá "lão luyện" có thể bỏ qua bài này</p>
            </div>
        </div>
        <div>
            <h3>2. Giải pháp</h3>
            <div>
                <p>Đâu tiên ta sẽ bắt click event ở nút tải ảnh</p>
                <pre class="language-none" data-filename="">                            <code class="language-none">
&lt;input type="file" class="hide" id="images-src" data-images-src="{{ json_encode($images) }}"&gt;
                    </code>
                </pre>
                <pre class="language-none" data-filename="">                            <code class="language-none">
$(document).on("click", "#download-images-btn", function() {
const urls = $('#images-src').data('imagesSrc'); // get json imamges url
downloadImages(urls);
});
                    </code>
                </pre>
                <p>
                    Sau khi ta đã có được 1 mảng các đường dẫn ảnh ta sẽ xử lý phần lấy tên file ta sẽ sử dụng hàng splitUrl. Còn nếu bạn muốn tất cả các ảnh render ra chung 1 tên thì có bỏ qua bước này và sẽ fix cứng phần name ở bước sau.
                </p>
                <pre class="language-none" data-filename="">                            <code class="language-none">
const splitUrl = url.split("/");
const filename = splitUrl[splitUrl.length - 1];
                    </code>
                </pre>
                <p>
                    Giờ tên ảnh cũng có rồi thì mình sẽ xử lý phần ảnh. Bình thường khi bạn lấy đường dẫn ảnh từ phía server trả về thì máy bạn sẽ chưa thể lưu lại về máy được bắt buộc bạn phải xử lý về đúng định dạng. Javascript đã cung cấp cho bạn để xử lý việc đó, mình xử dụng arrayBuffer lưu ảnh dưới dạng <b>typedArray</b>, khởi tạo thành 1 object khi đi qua Blob và cuối cùng là tạo thành 1 đường dẫn từ ojbect đó createObjectURL. Chúng ta sẽ có 1 dạng như dưới ảnh
                </p>
                <div class="text-center">
                    <img data-pil-src="https://images.viblo.asia/3b8187f7-8bff-4335-a544-6621f492c237.png" class="pil-original-img article-img medium-zoom-image" width="597" height="461" data-pil-srcset="https://images.viblo.asia/retina/3b8187f7-8bff-4335-a544-6621f492c237.png 2x" data-zoom-src="https://images.viblo.asia/full/3b8187f7-8bff-4335-a544-6621f492c237.png" src="https://images.viblo.asia/3b8187f7-8bff-4335-a544-6621f492c237.png" srcset="https://images.viblo.asia/retina/3b8187f7-8bff-4335-a544-6621f492c237.png 2x">
                </div>
                <p>
                    Đến đoạn này thì quá dễ rồi tên ảnh và đường dẫn ảnh cũng có rồi thì mình chỉ cần khởi tạo thẻ <b><code>&lt;a&gt;</code></b> setAttribute là download append vào body đồng thời trigger click và thẻ <b><code>&lt;a&gt;</code></b> vừa tạo để tải ảnh về thôi. Mình sẽ show code ở dưới cho bạn tham khảo:
                </p>
                <pre class="language-none" data-filename="">                            <code class="language-none">
downloadImages = () =&gt; {
if (_.isEmpty(urls)) {
    return false;
}

urls.map((url) =&gt; {
    const splitUrl = url.split("/");
    const filename = splitUrl[splitUrl.length - 1];
    fetch(url)
        .then((response) =&gt; {
            response.arrayBuffer().then(function (buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", filename); //or any other extension
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        })
        .catch((err) =&gt; {
            console.log(err);
        });
});
}
                    </code>
                </pre>
                <p><i>Lưu ý: Nếu ảnh từ server trả về là link từ cdn thì cdn đó phải access CORS nhé, lúc ý mới tải được ảnh.</i></p>
            </div>
        </div>
        <div>
            <h3>3. Kết luận</h3>
            <div>
                Như vậy mình đã giúp những bạn <i>"newbie"</i> xử lý một task rất dễ dàng bằng javascript. Bài viết dựa trên những hiểu biết cá nhân nên không tránh khỏi những thiếu sót, mọi người có thắc mắc hay phản hồi gì thì hãy comment xuống bên dưới để mình có thể giải đáp cũng như bổ sung để bài viết được hoàn thiện hơn. Cảm ơn các bạn đã theo dõi bài viết.
            </div>
        </div>
    </div>
</div>
</section>`,
  },
  {
    title: "Đánh giá sơ bộ về React V18",
    slug: "learn-about-react-v18",
    content: `<article class="post-content"><header class="mb-05"><div class="post-content__author_meta"><div class="post-author mb-2 text-break"><div class="mr-05 d-flex position-relative flex-col justify-content-center align-items-center">


</span></button></div> <!----></div></div></div> <h1 class="article-content__title">
React 18 có gì hot?
</h1> <!----></header>   </div> <div class="post__menu">
</li> <li tabindex="-1" class="el-dropdown-menu__item"><!----><i aria-hidden="true" class="fa fa-plus-square-o pr-0 mr-05"></i>
</li> <!----> <!----> <!----> <!----> <!----> <!----></ul></div> <!----> <!----> <!----> <!----> <!----></div></div> <!----> <!----> <div class="article-content__body my-2 flex-fill"><div class="md-contents" style="font-size:18px;line-height:1.75;"><h2 id="_tai-sao-nen-doc-bai-nay-0">Tại sao nên đọc bài này?</h2>
<ul>
<li>Biết được react 18 có gì hot. Có nên update không?</li>
<li>Có feature gì có thể tận dụng được ở React 18</li>
</ul>
<h2 id="_react-18---mot-version-linh-hoat-hon---nhung-cung-kho-hon-1">React 18 - Một version linh hoạt hơn - nhưng cũng khó hơn</h2>
<h3 id="_automatic-batching-2">Automatic batching</h3>
<p><span class="progressive-img_capturer progressive-img_wrapper article-img-wrapper"><canvas class="progressive-img_tiny progressive-img_filter-blur article-img-tiny progressive-img_hidden" width="1390" height="612" style="background: url('https://images.viblo.asia/60/681109dc-4c7b-4f8d-a7ed-0c0f8657cd1b.png') 100%/100%"></canvas><img class="progressive-img_full article-img" width="1390" height="612" data-full-src="https://images.viblo.asia/681109dc-4c7b-4f8d-a7ed-0c0f8657cd1b.png" alt="Untitled.png" data-tiny-src="https://images.viblo.asia/60/681109dc-4c7b-4f8d-a7ed-0c0f8657cd1b.png" data-zoom-src="https://images.viblo.asia/full/681109dc-4c7b-4f8d-a7ed-0c0f8657cd1b.png" data-srcset="https://images.viblo.asia/retina/681109dc-4c7b-4f8d-a7ed-0c0f8657cd1b.png 2x" data-wrapper-class="article-img-wrapper" data-tiny-class="article-img-tiny" data-full-class="article-img" src="https://images.viblo.asia/681109dc-4c7b-4f8d-a7ed-0c0f8657cd1b.png"></span></p>
<p>Trước đây trong một hàm, khi bạn <code>setState</code> 2 lần thì app của các bạn cũng sẽ render 2 lần. Kiểu như vầy</p>
<p><span class="progressive-img_capturer progressive-img_wrapper article-img-wrapper"><canvas class="progressive-img_tiny progressive-img_filter-blur article-img-tiny progressive-img_hidden" width="2887" height="1385" style="background: url('https://images.viblo.asia/60/1e100f5e-846e-4d1e-bb66-224d1f241887.jpg') 100%/100%"></canvas><img class="progressive-img_full article-img" width="2887" height="1385" data-full-src="https://images.viblo.asia/1e100f5e-846e-4d1e-bb66-224d1f241887.jpg" alt="React_18_-_Frame_1.jpg" data-tiny-src="https://images.viblo.asia/60/1e100f5e-846e-4d1e-bb66-224d1f241887.jpg" data-zoom-src="https://images.viblo.asia/full/1e100f5e-846e-4d1e-bb66-224d1f241887.jpg" data-srcset="https://images.viblo.asia/retina/1e100f5e-846e-4d1e-bb66-224d1f241887.jpg 2x" data-wrapper-class="article-img-wrapper" data-tiny-class="article-img-tiny" data-full-class="article-img" src="https://images.viblo.asia/1e100f5e-846e-4d1e-bb66-224d1f241887.jpg"></span></p>
<p>Thay vì phải render 2 lần, do mình đổi state state 2 lần, thì version mới sẽ gom lại một lần để tạo ra state cuối cùng rồi render luôn.</p>
<p>Với kinh nghiệm của mình thì cái này cực kì lợi hại. Vì hầu hết performance của React app đều bị ảnh hưởng rất lớn ở đoạn render, do đó, nếu skip được những lần render thừa như vậy thì app của chúng ta sẽ cực kì smooth luôn</p>
<p>Good job react team!</p>
<h3 id="_starttransition-3">startTransition</h3>
<p><span class="progressive-img_capturer progressive-img_wrapper article-img-wrapper"><canvas class="progressive-img_tiny progressive-img_filter-blur article-img-tiny" width="1072" height="500" style="background: url('https://images.viblo.asia/60/c2a3481d-9f2c-4fa6-9989-8154581f6762.png') 100%/100%"></canvas><img class="progressive-img_full progressive-img_hidden article-img" width="1072" height="500" data-full-src="https://images.viblo.asia/c2a3481d-9f2c-4fa6-9989-8154581f6762.png" alt="Untitled 1.png" data-tiny-src="https://images.viblo.asia/60/c2a3481d-9f2c-4fa6-9989-8154581f6762.png" data-zoom-src="https://images.viblo.asia/full/c2a3481d-9f2c-4fa6-9989-8154581f6762.png" data-srcset="https://images.viblo.asia/retina/c2a3481d-9f2c-4fa6-9989-8154581f6762.png 2x" data-wrapper-class="article-img-wrapper" data-tiny-class="article-img-tiny" data-full-class="article-img"></span></p>
<p>Okey, lại thêm một <code>hook</code> mới liên quan tới việc render. Vậy cái hook này để làm gì?</p>
<p>Trong một component, sẽ có những phần cần được render/xử lý sớm hơn những phần còn lại. Hầu hết các phần xử lý tương tác với user sẽ cần được priority hơn là những phần còn lại như là show kết quả, hiện loading,...</p>
<p>Mình lấy một ví dụ kinh điển là component search. Thường phần user input sẽ cần được handle ngay lập tức, còn phần thể hiện kết quả thì delay xíu cũng được.</p>
<p><span class="progressive-img_capturer progressive-img_wrapper article-img-wrapper"><canvas class="progressive-img_tiny progressive-img_filter-blur article-img-tiny" width="1784" height="1178" style="background: url('https://images.viblo.asia/60/ddd0ab32-d6a9-4a34-ba77-1ed85e46ab8a.png') 100%/100%"></canvas><img class="progressive-img_full progressive-img_hidden article-img" width="1784" height="1178" data-full-src="https://images.viblo.asia/ddd0ab32-d6a9-4a34-ba77-1ed85e46ab8a.png" alt="Untitled 2.png" data-tiny-src="https://images.viblo.asia/60/ddd0ab32-d6a9-4a34-ba77-1ed85e46ab8a.png" data-zoom-src="https://images.viblo.asia/full/ddd0ab32-d6a9-4a34-ba77-1ed85e46ab8a.png" data-srcset="https://images.viblo.asia/retina/ddd0ab32-d6a9-4a34-ba77-1ed85e46ab8a.png 2x" data-wrapper-class="article-img-wrapper" data-tiny-class="article-img-tiny" data-full-class="article-img"></span></p>
<p>Như trên hình, phần kết quả phụ thuộc vào ô search ở trên. Nếu user gõ khá nhanh, thì những kết quả ở dưới sẽ bị out-date, do đó cần render lại. Vậy state của ô Input là high priority, còn state để thể hiện kết quả là low priority</p>
<p>Mình lấy ví dụ khi user gõ “AB” vào ô search thì react sẽ chạy bên dưới như sau</p>
<p><a href="https://postimg.cc/DSTfZRBX" target="_blank"><img src="https://i.postimg.cc/nhsXdJm0/React-18-Frame-3.jpg" alt="React-18-Frame-3.jpg" class="article-img"></a></p>
<p>Với hook mới này từ react, thay vì phải render UI khi user gõ từ A (Trong khi user đã gõ AB luôn rồi), sau đó mới render kết quả cuối cùng cho “AB” thì bây giờ, nó có thể skip luôn việc xử lý state và render khi user mới chỉ gõ “A” vào ô search</p>
<h3 id="_suspense-api-co-them-mot-vai-improve-4">Suspense API có thêm một vài improve</h3>
<p><span class="progressive-img_capturer progressive-img_wrapper article-img-wrapper"><canvas class="progressive-img_tiny progressive-img_filter-blur article-img-tiny" width="1696" height="978" style="background: url('https://images.viblo.asia/60/7c3f3ac4-4ec2-4162-87a4-e0e8c131ebf8.png') 100%/100%"></canvas><img class="progressive-img_full progressive-img_hidden article-img" width="1696" height="978" data-full-src="https://images.viblo.asia/7c3f3ac4-4ec2-4162-87a4-e0e8c131ebf8.png" alt="Untitled 3.png" data-tiny-src="https://images.viblo.asia/60/7c3f3ac4-4ec2-4162-87a4-e0e8c131ebf8.png" data-zoom-src="https://images.viblo.asia/full/7c3f3ac4-4ec2-4162-87a4-e0e8c131ebf8.png" data-srcset="https://images.viblo.asia/retina/7c3f3ac4-4ec2-4162-87a4-e0e8c131ebf8.png 2x" data-wrapper-class="article-img-wrapper" data-tiny-class="article-img-tiny" data-full-class="article-img"></span>
<span class="progressive-img_capturer progressive-img_wrapper article-img-wrapper"><canvas class="progressive-img_tiny progressive-img_filter-blur article-img-tiny" width="1760" height="638" style="background: url('https://images.viblo.asia/60/0e3c5544-edbc-4532-9d82-e3ef0a438ac2.png') 100%/100%"></canvas><img class="progressive-img_full progressive-img_hidden article-img" width="1760" height="638" data-full-src="https://images.viblo.asia/0e3c5544-edbc-4532-9d82-e3ef0a438ac2.png" alt="Untitled 4.png" data-tiny-src="https://images.viblo.asia/60/0e3c5544-edbc-4532-9d82-e3ef0a438ac2.png" data-zoom-src="https://images.viblo.asia/full/0e3c5544-edbc-4532-9d82-e3ef0a438ac2.png" data-srcset="https://images.viblo.asia/retina/0e3c5544-edbc-4532-9d82-e3ef0a438ac2.png 2x" data-wrapper-class="article-img-wrapper" data-tiny-class="article-img-tiny" data-full-class="article-img"></span></p>
<p>Nếu react chạy trên server với Suspense, thì nó sẽ render fallback component và sau đó nếu component bên trong Suspense đã ready để render, React sẽ send bundle code cho phần này riêng</p>
<p><span class="progressive-img_capturer progressive-img_wrapper article-img-wrapper"><canvas class="progressive-img_tiny progressive-img_filter-blur article-img-tiny" width="1928" height="2074" style="background: url('https://images.viblo.asia/60/805f88bd-af17-4120-8a22-694886eb69cc.jpg') 100%/100%"></canvas><img class="progressive-img_full progressive-img_hidden article-img" width="1928" height="2074" data-full-src="https://images.viblo.asia/805f88bd-af17-4120-8a22-694886eb69cc.jpg" alt="React_18_-_Frame_4.jpg" data-tiny-src="https://images.viblo.asia/60/805f88bd-af17-4120-8a22-694886eb69cc.jpg" data-zoom-src="https://images.viblo.asia/full/805f88bd-af17-4120-8a22-694886eb69cc.jpg" data-srcset="https://images.viblo.asia/retina/805f88bd-af17-4120-8a22-694886eb69cc.jpg 2x" data-wrapper-class="article-img-wrapper" data-tiny-class="article-img-tiny" data-full-class="article-img"></span></p>
<p>Lấy ví dụ cho đơn giản nhé, ví dụ component <code>&lt;Comments /&gt;</code> load data, và cục data này cần 3s mới trả về.</p>
<p>Thì với React 17, server phải chờ data đã load về rồi mới render ra được HTML, xong rồi trả về cho user. Nghĩa là, chắc chắn, user phải chờ hơn 3s mới có thể nhận được response</p>
<p>Với React 18, server sẽ không chờ data load về mà render luôn fallback component, ở đây là <code>&lt;Spinner /&gt;</code>  rồi sau đó, nếu component <code>&lt;Comments /&gt;</code> load xong thì gửi thêm một bundle riêng để client bỏ vào. Đồng nghĩa với việc, user không phải chờ 3s mới có response mà vấn có thể load được web và xem các component khác</p>
<p>Túm lại, với React 18, một component nếu gói trong <code>&lt;Suspense /&gt;</code> thì sẽ không làm chậm các thành phần render khác</p>
<p><span class="progressive-img_capturer progressive-img_wrapper article-img-wrapper"><canvas class="progressive-img_tiny progressive-img_filter-blur article-img-tiny" width="1672" height="980" style="background: url('https://images.viblo.asia/60/5ac37d74-c0bd-4788-b0dc-bd498038b435.png') 100%/100%"></canvas><img class="progressive-img_full progressive-img_hidden article-img" width="1672" height="980" data-full-src="https://images.viblo.asia/5ac37d74-c0bd-4788-b0dc-bd498038b435.png" alt="Untitled 5.png" data-tiny-src="https://images.viblo.asia/60/5ac37d74-c0bd-4788-b0dc-bd498038b435.png" data-zoom-src="https://images.viblo.asia/full/5ac37d74-c0bd-4788-b0dc-bd498038b435.png" data-srcset="https://images.viblo.asia/retina/5ac37d74-c0bd-4788-b0dc-bd498038b435.png 2x" data-wrapper-class="article-img-wrapper" data-tiny-class="article-img-tiny" data-full-class="article-img"></span></p>
<p>Ngoài ra, ở phía client, nếu component được gói trong <code>&lt;Suspense /&gt;</code> thì khi user interact với component này sẽ được ưu tiên xử lý trước</p>
<p>Và một vài thứ khác nữa</p>
<p><a href="https://reactjs.org/blog/2022/03/29/react-v18.html" target="_blank">React v18.0 - React Blog</a></p>
<h2 id="_co-nen-update-khong-5">Có nên update không?</h2>
<p>Không, mấy cái project làm chơi thì được. Mình thấy khá nhiều users complain khi upgrade lên version mới này thì không chạy được nữa, ngay cả với Nextjs. Do đó mình khuyến khích mọi người nghịch thì được chứ upgrade lên project công ty thì vỡ alo đó</p>
<p><a href="https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html" target="_blank">How to Upgrade to React 18 - React Blog</a></p>
<h2 id="_vay-thi-khi-nao-6">Vậy thì khi nào?</h2>
<p>Với kinh nghiệm của mình thì mỗi lần Big Update từ React thì nên đợi tầm 6 tháng - 1 năm thì mọi thứ mới có thể fit với nhau được</p>
<h2 id="_tong-ket-7">Tổng kết</h2>
<p>Với roadmap của React hiện tại, team đang chú ý rất nhiều vào performance, đặc biệt là Interactive performance. Do đó, nếu các project thiên nhiều về xử lý logic, render state thì sắp tới sẽ có những improve rất lớn</p>
<p>Riêng mình thì vẫn đang chờ React support lazy hydrating component, hy vọng sẽ có trong tương lai không xa!</p>

</div> <!----></div> <!----> <div class="tags" data-v-190ce5c0=""> <a href="/tags/frontend" class="el-tag tag el-tag--info el-tag--medium" data-v-7b533dae="" data-v-190ce5c0="">
frontend
</a><a href="/tags/react" class="el-tag tag el-tag--info el-tag--medium" data-v-7b533dae="" data-v-190ce5c0="">
React
</a> </div> <br> <p title="People cannot distribute, remix, adapt, and build upon this workwithout author's permission (or as permitted by fair use)." class="license-text text-muted">
All rights reserved
</p> <div class="post-footer d-flex align-items-center justify-content-end mb-2"><div class="social-sharing mr-1 social-sharing--vertical social-sharing--medium" data-v-235dd1c0=""><a tooltip-placement="bottom" rel="noopener" class="link link--muted link--muted" data-v-235dd1c0="" data-tippy="" data-original-title="Chia sẻ liên kết đến trang này trên Facebook"><i aria-hidden="true" class="fa fa-facebook" data-v-235dd1c0=""></i></a> <a tooltip-placement="bottom" rel="noopener" class="link link--muted link--muted" data-v-235dd1c0="" data-tippy="" data-original-title="Chia sẻ liên kết đến trang này trên Twitter"><i aria-hidden="true" class="fa fa-twitter" data-v-235dd1c0=""></i></a></div> <div class="post__menu"><div class="el-dropdown"><button type="button" class="el-button p-0 el-button--text text-muted el-dropdown-selfdefine" data-tippy="" data-original-title="Hiển thị các hành động" aria-haspopup="list" aria-controls="dropdown-menu-346" role="button" tabindex="0"><!----><i class="post__menu__more el-icon-more-outline"></i><!----></button> <ul class="el-dropdown-menu el-popper el-dropdown-menu--medium" style="display:none;" id="dropdown-menu-346"><!----> <li tabindex="-1" class="el-dropdown-menu__item"><!----><i aria-hidden="true" class="fa fa-flag-o pr-0 mr-05"></i>
Báo cáo
</li> <!----> <!----> <!----> <!----> <!----> <!----></ul></div> <!----> <!----> <!----> <!----> <!----></div></div></article>`,
  },
  {
    title: "SEO trên Website sử dụng ReactJS",
    slug: "seo-reactjs",
    content: `<article id="post-12" class="post-12 post type-post status-publish format-standard hentry category-khong-phan-loai">

	<div class="detail-wrap">
		<header class="entry-header">
			<h1 class="entry-title">SEO trên Website sử dụng ReactJS</h1>
		</header><!-- .entry-header -->

		
		<div class="entry-content">
			
<p>ReactJS là một công nghệ phát triển ứng dụng web front-end được sử dụng rộng rãi hiện nay. Tuy nhiên, mặc dù có nhiều lợi ích khi sử dụng ReactJS, việc tối ưu hóa SEO cho trang web sử dụng ReactJS vẫn là một vấn đề khó khăn đối với các lập trình viên front-end. Trong bài viết này, chúng ta sẽ tìm hiểu cách giải quyết vấn đề này.</p>



<p><strong>1. SEO là gì?</strong></p>



<p>SEO (Search Engine Optimization) là quá trình tối ưu hóa các yếu tố trên trang web để có thứ hạng cao trên các công cụ tìm kiếm như Google, Bing, Yahoo, vv. Mục đích của SEO là tăng lượng truy cập và tăng doanh số bán hàng của trang web. Với các trang web viết bằng ReactJS, SEO đặc biệt quan trọng vì trang web được tạo ra bởi ReactJS là một ứng dụng đơn trang (Single Page Application – SPA), có nghĩa là trang web không được tải lại hoàn toàn khi người dùng thực hiện một hành động.</p>



<p><strong>2. Các yếu tố ảnh hưởng đến SEO của trang web sử dụng ReactJS</strong></p>



<p>Các yếu tố quan trọng nhất ảnh hưởng đến SEO của trang web sử dụng ReactJS bao gồm:</p>



<p><strong>2.1. Tiêu đề (Title)</strong></p>



<p>Tiêu đề (Title) là một yếu tố quan trọng trong SEO. Tiêu đề sẽ được hiển thị trên thanh địa chỉ (URL) của trang web và là yếu tố quan trọng trong quá trình đánh giá chủ đề của trang web. Vì vậy, các lập trình viên front-end cần phải tối ưu hóa tiêu đề của trang web để đảm bảo nó phù hợp với nội dung của trang web.</p>



<p><strong>2.2. Mô tả (Meta Description)</strong></p>



<p>Mô tả (Meta Description) là một phần quan trọng trong SEO. Nó giúp người dùng hiểu được nội dung của trang web trước khi truy cập vào trang web. Vì vậy, các lập trình viên front-end cần phải tối ưu hóa mô tả của trang web để thu hút sự chú ý của người dùng.</p>



<p><strong>2.3. Từ khóa (Keywords)</strong></p>



<p>Từ khóa (Keywords) là một yếu tố quan trọng trong SEO. Chúng được sử dụng để mô tả nội dung của trang web và giúp các công cụ tìm kiếm hiểu và đánh giá trang web. Tuy nhiên, trong thời gian gần đây, từ khóa không còn được sử dụng quá nhiều trong SEO vì Google đã cập nhật thuật toán của mình để đánh giá nội dung của trang web dựa trên các yếu tố khác như chất lượng nội dung, trải nghiệm người dùng, v.v.</p>



<p><strong>2.4. URL</strong></p>



<p>URL là một yếu tố quan trọng trong SEO. URL cần phải được tối ưu hóa để đảm bảo rõ ràng và dễ đọc, giúp cho các công cụ tìm kiếm dễ dàng hiểu được nội dung của trang web.</p>



<p><strong>2.5. Thẻ tiêu đề (Header tags)</strong></p>



<p>Thẻ tiêu đề (Header tags) là các thẻ HTML (như &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, v.v.) được sử dụng để phân loại và đánh dấu các phần khác nhau của nội dung trên trang web. Thẻ tiêu đề cũng là yếu tố quan trọng trong SEO, vì chúng giúp các công cụ tìm kiếm hiểu được cấu trúc của trang web và đánh giá nội dung của trang web.</p>



<p><strong>2.6. Nội dung (Content)</strong></p>



<p>Nội dung là yếu tố quan trọng nhất trong SEO. Nội dung phải được viết tốt và chất lượng để thu hút người dùng và giúp trang web có thứ hạng cao trên các công cụ tìm kiếm. Nội dung cũng phải được tối ưu hóa cho từ khóa phù hợp để thu hút khách hàng tìm kiếm.</p>



<p><strong>3. Các giải pháp để tối ưu hóa SEO cho trang web sử dụng ReactJS</strong></p>



<p>Các giải pháp để tối ưu hóa SEO cho trang web sử dụng ReactJS bao gồm:</p>



<p><strong>3.1. Sử dụng Next.js</strong></p>



<p>Next.js là một framework ReactJS được sử dụng để xây dựng các ứng dụng web với SEO tốt. Next.js cung cấp các tính năng như Server-side rendering, Static site generation, và Automatic code splitting để giúp tối ưu hóa SEO cho trang web. Với Next.js, các lập trình viên front-end có thể dễ dàng tối ưu hóa các yếu tố SEO của trang web như Tiêu đề, Mô tả, URL, Thẻ tiêu đề, và Nội dung.</p>



<p><strong>3.2. Sử dụng các công cụ SEO</strong></p>



<p>Các công cụ SEO như Google Search Console, Bing Webmaster Tools, và các công cụ phân tích từ khóa như Ahrefs, SEMrush, v.v. cũng là các giải pháp hữu ích để tối ưu hóa SEO cho trang web sử dụng ReactJS. Các công cụ này cung cấp thông tin về các từ khóa tốt nhất để tối ưu hóa trang web, tốc độ tải trang, phân tích cấu trúc liên kết, v.v.</p>



<p><strong>3.3. Tối ưu hóa trang web</strong></p>



<p>Các lập trình viên front-end có thể tối ưu hóa trang web sử dụng ReactJS bằng cách:</p>



<ul>
<li>Tối ưu hóa mã HTML và CSS</li>



<li>Sử dụng các thẻ tiêu đề (Header tags) đúng cách và đặt các từ khóa vào trong tiêu đề</li>



<li>Tạo các URL thân thiện với người dùng và dễ đọc</li>



<li>Tạo nội dung tốt và chất lượng, với các từ khóa phù hợp và đặt chúng vào vị trí hợp lý trong nội dung</li>



<li>Tối ưu hóa hình ảnh và video bằng cách sử dụng các tên tập tin và thẻ alt phù hợp</li>
</ul>



<p><strong>4. Ví dụ về tối ưu hóa SEO cho trang web sử dụng ReactJS</strong></p>



<p>Để minh họa các giải pháp tối ưu hóa SEO cho trang web sử dụng ReactJS, chúng ta sẽ tạo một trang web đơn giản bằng ReactJS và sử dụng Next.js để tối ưu hóa SEO cho trang web này.</p>



<p>Đầu tiên, chúng ta cần cài đặt Next.js bằng cách sử dụng lệnh sau:</p>



<pre class="wp-block-preformatted has-white-color has-black-background-color has-text-color has-background">npx create-next-app my-app
cd my-app
npm run dev
</pre>



<p>Sau đó, chúng ta sẽ tạo một trang chủ đơn giản và tối ưu hóa SEO cho trang này bằng cách thêm Tiêu đề, Mô tả, URL, Thẻ tiêu đề, và Nội dung phù hợp.</p>



<p><strong>4.1. Tiêu đề (Title)</strong></p>



<p>Chúng ta có thể thêm Tiêu đề cho trang web bằng cách sử dụng thẻ &lt;title&gt; trong mã HTML. Tiêu đề phải được tối ưu hóa để có chứa các từ khóa phù hợp và có độ dài tối đa là 60 ký tự.</p>



<pre class="wp-block-preformatted has-white-color has-black-background-color has-text-color has-background">&lt;head&gt;
  &lt;title&gt;Trang chủ - Ví dụ tối ưu hóa SEO cho trang web sử dụng ReactJS&lt;/title&gt;
&lt;/head&gt;
</pre>



<p><strong>4.2. Mô tả (Description)</strong></p>



<p>Chúng ta cũng có thể thêm Mô tả cho trang web bằng cách sử dụng thẻ &lt;meta&gt; trong mã HTML. Mô tả cũng phải được tối ưu hóa để có chứa các từ khóa phù hợp và có độ dài tối đa là 155 ký tự.</p>



<pre class="wp-block-preformatted has-white-color has-black-background-color has-text-color has-background">&lt;head&gt;
  &lt;title&gt;Trang chủ - Ví dụ tối ưu hóa SEO cho trang web sử dụng ReactJS&lt;/title&gt;
  &lt;meta name="description" content="Đây là trang chủ của trang web Ví dụ tối ưu hóa SEO cho trang web sử dụng ReactJS. Trang web này được tạo bằng ReactJS và sử dụng Next.js để tối ưu hóa SEO."&gt;
&lt;/head&gt;
</pre>



<p><strong>4.3. URL</strong></p>



<p>Chúng ta cần tạo các URL thân thiện với người dùng và dễ đọc. Chúng ta có thể sử dụng module <code>next/router</code> của Next.js để tạo các URL như sau:</p>



<pre class="wp-block-preformatted has-white-color has-black-background-color has-text-color has-background">import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () =&gt; {
    router.push('/about')
  }

  return (
    &lt;div&gt;
      &lt;h1&gt;Trang chủ&lt;/h1&gt;
      &lt;button onClick={handleClick}&gt;Chuyển đến trang giới thiệu&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default Home
</pre>



<p><strong>4.4. Thẻ tiêu đề (Header tags)</strong></p>



<p>Chúng ta cần sử dụng các thẻ tiêu đề đúng cách và đặt các từ khóa vào trong tiêu đề để tối ưu hóa trang web. Ví dụ:</p>



<pre class="wp-block-preformatted has-white-color has-black-background-color has-text-color has-background">function Home() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Trang chủ&lt;/h1&gt;
      &lt;h2&gt;Tiêu đề con 1&lt;/h2&gt;
      &lt;p&gt;Nội dung&lt;/p&gt;
      &lt;h2&gt;Tiêu đề con 2&lt;/h2&gt;
      &lt;p&gt;Nội dung&lt;/p&gt;
    &lt;/div&gt;
  )
}

export default Home
</pre>



<p><strong>4.5. Nội dung (Content)</strong></p>



<p>Chúng ta cần tạo nội dung tốt và chất lượng, với các từ khóa phù hợp và đặt chúng vào vị trí hợp lý trong nội dung. Ví dụ:</p>



<pre class="wp-block-preformatted has-white-color has-black-background-color has-text-color has-background">function Home() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Trang chủ&lt;/h1&gt;
      &lt;p&gt;Chào mừng đến với trang web Ví dụ tối ưu hóa SEO cho trang web sử dụng ReactJS. Trang web này được tạo bằng ReactJS và sử dụng Next.js để tối ưu hóa SEO.&lt;/p&gt;
      &lt;p&gt;Bạn có thể tìm thấy các bài viết về các chủ đề như tối ưu hóa SEO, ReactJS, Next.js, v.v. trên trang web này.&lt;/p&gt;
    &lt;/div&gt;
  )
}

export default Home
</pre>



<p><strong>4.6. Tối ưu hóa hình ảnh</strong></p>



<p>Các hình ảnh trên trang web cũng cần phải được tối ưu hóa để cải thiện thời gian tải trang và cũng giúp cho trang web có thứ hạng tốt hơn trên kết quả tìm kiếm. Các thẻ &lt;img&gt; cần phải có thuộc tính “alt” để mô tả hình ảnh và nên sử dụng các tên tệp hợp lý.</p>



<pre class="wp-block-preformatted has-white-color has-black-background-color has-text-color has-background">function Home() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Trang chủ&lt;/h1&gt;
      &lt;img src="/images/example.jpg" alt="Mô tả hình ảnh" /&gt;
      &lt;p&gt;Chào mừng đến với trang web Ví dụ tối ưu hóa SEO cho trang web sử dụng ReactJS. Trang web này được tạo bằng ReactJS và sử dụng Next.js để tối ưu hóa SEO.&lt;/p&gt;
      &lt;p&gt;Bạn có thể tìm thấy các bài viết về các chủ đề như tối ưu hóa SEO, ReactJS, Next.js, v.v. trên trang web này.&lt;/p&gt;
    &lt;/div&gt;
  )
}

export default Home
</pre>



<p><strong>4.7. Sitemap và robots.txt</strong></p>



<p>Sitemap là một tệp XML chứa thông tin về các trang web có trong trang web của bạn và giúp các công cụ tìm kiếm hiểu được cấu trúc của trang web của bạn. Các tệp robots.txt cho phép bạn chỉ định cho các robot tìm kiếm biết các phần của trang web không nên được quét. Bạn có thể tạo và cấu hình các tệp này bằng cách thêm các tệp tương ứng vào trong thư mục gốc của trang web của bạn.</p>



<p><strong>5. Kết luận</strong></p>



<p>Việc tối ưu hóa SEO cho trang web sử dụng ReactJS là một quá trình dài và cần thiết. Bằng cách sử dụng các kỹ thuật và công cụ tối ưu hóa tốt nhất, chúng ta có thể giúp trang web của mình đạt được thứ hạng cao trên các kết quả tìm kiếm, giúp tăng lượng truy cập và thu hút khách hàng tiềm năng. Hi vọng bài viết này đã cung cấp cho bạn các thông tin hữu ích để giúp bạn tối ưu hóa SEO cho trang web của mình sử dụng ReactJS.</p>
		</div><!-- .entry-content -->
	</div>

</article>`,
  },
  {
    title: "Truyền dữ liệu giữa React Components",
    slug: "data-transmission-props",
    content: `<article class="techmaster-font-open-sans post-content" id="post-details"><p><i>Bài viết được biên&nbsp;dịch và tóm tắt&nbsp;lại từ&nbsp;</i><a href="https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf"><i>https://towardsdatascience.com</i></a><i>, code demo được chuyển sang dùng Hooks.</i></p><p>Xử lý dữ liệu trong React có thể hơi khó khăn một chút, nhưng cũng không quá phức tạp. Tôi đã tổng kết lại 3 cách để truyền dữ liệu giữa các Component trong React:</p><ol><li>Từ Parent (Component cha) đến Child (Component con) sử dụng&nbsp;Props.</li><li>Từ Child đến Parent sử dụng Callbacks.</li><li>Giữa các Siblings (anh em, họ hàng,&nbsp;hàng xóm, ...)<ul><li>Kết hợp cách 1 và 2.</li><li>Sử dụng <a href="https://redux.js.org/">Redux </a>(hoặc các thư viện có chức năng tương tự).</li><li>Sử dụng <a href="https://reactjs.org/docs/context.html">Context API</a> của React.</li></ul></li></ol><span id="toc-1-t-parent-n-child-s-d-ng-props"></span><h2>1. Từ Parent đến Child sử dụng Props</h2><p>Giả sử ứng dụng có cấu trúc Component như sau:</p><figure class="image"><img src="https://media.techmaster.vn/api/static/53/bnf8fls51cobehp8svj0" alt="React components" style="margin: auto;"></figure><p>Đây là trường hợp phổ biến và dễ nhất khi truyền dữ liệu trong React.</p><pre><code class="react hljs language-javascript"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>, {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;

    <span class="hljs-keyword">function</span> <span class="hljs-title function_">Parent</span>(<span class="hljs-params"></span>) {
      <span class="hljs-keyword">const</span> [data, setData] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">'Hello World'</span>)
    
      <span class="hljs-keyword">return</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Child1</span>/&gt;</span>   // Không truyền dữ liệu            
          <span class="hljs-tag">&lt;<span class="hljs-name">Child2</span> <span class="hljs-attr">dataFromParent</span>=<span class="hljs-string">"Hello"</span> /&gt;</span>   // Truyền dữ liệu qua Props
          <span class="hljs-tag">&lt;<span class="hljs-name">Child2</span> <span class="hljs-attr">dataFromParent</span>=<span class="hljs-string">{data}</span> /&gt;</span>   // Truyền dữ liệu qua Props
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      );
    }</code></pre><p>Ở Child component chỉ cần dùng&nbsp;<i>props.dataFromParent</i> để lấy dữ liệu đã được truyền từ Parent (<i>dataFromParent </i>chỉ như một biến, một thuộc tính tự mình đặt ra để truyền dữ liệu qua <i>props</i>):</p><pre><code class="react hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Child2</span>(<span class="hljs-params">props</span>) {
      <span class="hljs-keyword">return</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          Dữ liệu nhận được từ Parent: {props.dataFromParent}
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      );
    }</code></pre><p>&nbsp;</p><span id="toc-2-t-child-n-parent-s-d-ng-callbacks"></span><h2>2. Từ Child đến Parent sử dụng Callbacks</h2><p>Để truyền dữ liệu từ Child lên Parent chúng ta thực hiện theo các bước sau:</p><p><strong>Bước 1</strong>: Định nghĩa 1 callback function ở Parent component, function này sẽ có tham số để&nbsp;chứa dữ liệu được truyền đi từ Child component.</p><p><strong>Bước 2</strong>: Truyền callback function đã được định nghĩa ở trên vào Child component qua props (tương tự truyền dữ liệu từ Parent đến Child).</p><pre><code class="react hljs language-javascript"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>, {useState} <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
    
    <span class="hljs-keyword">function</span> <span class="hljs-title function_">Parent</span>(<span class="hljs-params"></span>) {
      <span class="hljs-keyword">const</span> [message, setMessage] = <span class="hljs-title function_">useState</span>(<span class="hljs-string">''</span>)
    
      callbackFunction = <span class="hljs-function">(<span class="hljs-params">childData</span>) =&gt;</span> {
        <span class="hljs-title function_">setMessage</span>(childData)
      },
    
      <span class="hljs-keyword">return</span> (
        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Child</span> <span class="hljs-attr">parentCallback</span>=<span class="hljs-string">{callbackFunction}/</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> {message} <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      );
    }</code></pre><p><strong>Bước 3</strong>: Ở Child component truyền dữ liệu ngược lại Parent bằng cách gọi <i>props.callback(dataToParent)</i></p><pre><code class="react hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Child</span>(<span class="hljs-params">props</span>) {
      sendData = <span class="hljs-function">() =&gt;</span> {
        props.<span class="hljs-title function_">parentCallback</span>(<span class="hljs-string">"Message from Child"</span>);
      },
    
      <span class="hljs-keyword">return</span> (
        <span class="hljs-comment">// Gọi function sendData bất cứ khi nào bạn muốn truyền dữ liệu lên Parent component (khi có sự kiện xảy ra như onClick, onChange, ...)</span>
      )
    };</code></pre><p>&nbsp;</p><span id="toc-truy-n-d-li-u-gi-a-c-c-siblings"></span><h2>Truyền dữ liệu giữa các Siblings</h2><span id="toc-c-ch-1-k-t-h-p-2-c-ch-truy-n-d-li-u-tr-n"></span><h3>Cách 1: Kết hợp 2 cách truyền dữ liệu ở trên</h3><p>Cách này chỉ dùng trong trường hợp đơn giản,&nbsp;không nên sử dụng trong trường hợp các Component lồng nhiều cấp (cây gia phả quá lớn, họ hàng bắn đại bác không tới), vì code sẽ trùng lặp nhiều và khó theo dõi luồng dữ liệu.</p><figure class="image"><img src="https://media.techmaster.vn/api/static/53/bngb6rk51coerket1td0" alt="react state 1" style="margin: auto;"></figure><span id="toc-c-ch-2-s-d-ng-m-t-global-store-redux-qu-n-l-state-cho-t-t-c-c-c-component-c-n-truy-n-d-li-u-v-t-ng-t-c-v-i-nhau"></span><h3>Cách 2: Sử dụng một&nbsp;Global store (Redux)&nbsp;để quản lý State cho tất cả các Component cần truyền dữ liệu và tương tác với nhau</h3><figure class="image"><img src="https://media.techmaster.vn/api/static/53/bngb60451coerket1tcg" alt="React state 2" style="margin: auto;"></figure><span id="toc-c-ch-3-s-d-ng-context-api-c-a-react"></span><h3>Cách 3: Sử dụng Context API của React</h3><figure class="image"><img src="https://miro.medium.com/max/1139/1*6DZamBh-Un-_xZq--FsVgg.png" alt="React Context API" style="margin: auto;"></figure><p>Tham khảo thêm 1 số&nbsp;bài viết giới thiệu về React Context API:&nbsp;</p><ul><li><a href="https://medium.com/@wisecobbler/using-context-in-react-56a8e7da5431">Using Context in React</a></li><li><a href="https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3">React Context API — A Replacement for Redux?</a></li><li><a href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">You Might Not Need Redux</a></li></ul><p>&nbsp; </p></article>`,
  },
];
export default function Modals({ show = {}, handleClose = () => {} }) {
  const contents = data.find((item) => item.slug === show.slug) || {};
  return (
    <Modal
      show={show.show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{contents.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Div dangerouslySetInnerHTML={{ __html: contents.content || "" }}></Div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Div = styled.div`
  img {
    max-width: 100% !important;
  }
  canvas {
    display: none;
  }
`;
