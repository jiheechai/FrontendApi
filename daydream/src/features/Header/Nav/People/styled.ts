import styled from "styled-components";

export const PeopleStyledComponent = styled.div`
  .peoplenum {
    text-align: center;
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }

  .pickPopup {
    .selectPeoplenumBox {
      position: absolute;
      font-size: medium;
      top: 75px;
      right: 0%;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 300px;
      z-index: 300;
      display: flex;
      flex-direction: column;

      .guestRow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        border-bottom: 1px solid #e0e0e0;
        &:last-child {
          border-bottom: none; /* 마지막 행 구분선 제거 */
        }
        Button {
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          cursor: pointer;
          margin: 0 10px; /* 버튼 간 간격 */
          &:hover {
            background-color: #f0f0f0;
          }
        }
      }
      .okBox {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid lightgray;
        color: black;
        border-radius: 8px;
        height: 40px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }
`;
