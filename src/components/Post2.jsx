//import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import Modal from '../components/Modal';
import MyModal from '../components/MyModal';


const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.form);
  const { id } = useParams();
  const post = data.find((post)=> {return String(post.id)=== id;})
  const onDeletePost = (id) => {
    return (
    console.log("삭제"),
    data.filter(post => post.id !== id),
    navigate("/")

  )};

  const [modal, setModal] = useState(false);

  return <StPost>
    
    <div>
      홈으로 이동 링크
    </div>

    
          
            <StContainer>
          
            
            Id: {post.id}
            

            <ConDirect>
                      
                      <ConLabel>이미지</ConLabel>
                      <Image src={post.image} />
                      
                      </ConDirect>
                    <ConDirect>
                    <ConLabel>책 제목</ConLabel>
                    <h2> {post.title} </h2>
                    </ConDirect>


                    <ConDirect>
                    <ConLabel>작성자</ConLabel>
                    <h4> {post.writer} </h4>
                    </ConDirect>

                    <ConDirect>
                    <ConLabel>내용</ConLabel>

                    <div> {post.body}</div>
                    </ConDirect>

                    <ConBtn>
                    <button onClick={()=>{setModal(true)}}>수정</button>
                    {modal === true?<Modal/>:null}



                    <button  onClick={() => onDeletePost(post.id)}>삭제</button>
                    </ConBtn>
                    </StContainer>
                    
            
        

                    
 

  </StPost>

        
};

export default Post;

const StPost = styled.div`
  width: 50%;
`;

const StContainer = styled.div`
  border: 1px solid #ddd;
  height: 900px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px;
  margin-bottom: 24px;
`;

const ConDirect = styled.div`
  flex-direction: column;
  display: flex;
  padding: 0 0 0 20px ;
`;

const ConLabel= styled.label`
  padding: 30px 0 30px 0;
  font-size: 20px;
  font-weight: bold;
`;

const ConBtn= styled.div`
  flex-direction: row;
  align-self: flex-end;
  margin-bottom: 20px;
 `;

const Image = styled.img`
height: 200px;
`;

