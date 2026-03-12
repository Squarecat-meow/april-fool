export default function Noti() {
  return (
    <article className="my-6 p-6 flex gap-12 border-2 border-t-blue-500 border-gray-200 rounded-b-3xl">
      <span className="h-24 aspect-square text-4xl grid place-items-center bg-gray-100 rounded-full">
        🔔
      </span>
      <div className="col-span-4">
        <ul className="list-disc break-keep text-sm font-light">
          <li>
            게시되는 글의 본문이나 첨부파일에{" "}
            <span className="font-bold">
              개인정보(주민등록번호, 휴대폰번호, 주소, 은행계좌번호,
              신용카드번호 등 개인을 식별할 수 있는 모든 정보)를 포함시키지
              않도록 주의
            </span>
            하시기 바랍니다.
          </li>
          <li>
            <span className="font-bold">
              개인정보가 게시되어 노출 될 경우 해당 게시물 작성자가 관련 법령에
              따라 처분
            </span>
            을 받을 수 있으니 유의하시기 바랍니다.
          </li>
          <li>
            게시글에 이미지 삽입 시 [상세 내용]을 “그림설명”에 입력해야 합니다.
            <span className="font-bold">
              (장애인차별금지법에 따른 웹접근성 준수)
            </span>
          </li>
          <li>
            외부 동영상 탑재 시 콘텐츠(음성정보 등)에 대한 대체 수단(자막삽입
            또는 본문설명)이 제공되어야 합니다.
          </li>
          <li>
            저작권자의 허락없이 제작물(사진,그림,영상,폰트 등)을 올릴경우
            저작권법에 의하여 처벌 받을 수 있으니 유의하시기 바랍니다.
          </li>
        </ul>
      </div>
    </article>
  );
}
