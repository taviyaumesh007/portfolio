import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 8rem;
      height: 0.4rem;
      background: linear-gradient(45deg, var(--pink), var(--blue));
      border-radius: 2rem;
    }
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    gap: 3rem;
    padding: 2rem;
    max-width: 120rem;
    margin: 0 auto;

    .project{
      position: relative;
      padding: 3rem 2.5rem;
      background: linear-gradient(145deg, #2b2b2b 0%, #1f1f1f 100%);
      border-radius: 2rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 0.3rem;
        background: linear-gradient(90deg, var(--pink), var(--blue), var(--yellow));
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover{
        transform: translateY(-1rem) scale(1.02);
        background: linear-gradient(145deg, #333333 0%, #2b2b2b 100%);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        border-color: rgba(255, 255, 255, 0.2);

        &::before {
          opacity: 1;
        }

        .project-icon {
          transform: rotate(10deg) scale(1.1);
          stroke: var(--yellow);
        }

        .project-links a {
          transform: translateY(-0.2rem);
        }
      }

      header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 2.5rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        .project-icon {
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 8px rgba(35, 206, 107, 0.3));
        }

        .project-links{
          display: flex;
          align-items: center;
          gap: 1.2rem;
          
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4rem;
            height: 4rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            
            &:hover {
              background: rgba(35, 206, 107, 0.2);
              transform: scale(1.1);
            }
            
            img {
              width: 2rem;
              height: 2rem;
              filter: brightness(1.2);
            }
          }
        }
      }
      
      .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        
        h3{
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, #FFF, #e0e0e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        p{
          letter-spacing: 0.05rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.9;
          flex: 1;
          
          a{
            color: var(--yellow);
            border-bottom: 1px solid var(--yellow);
            transition: all 0.25s;
            text-decoration: none;
            
            &:hover{
              color: #FFF;
              border-bottom-color: #FFF;
            }
          }
        }
      }

      footer{
        margin-top: auto;
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        
        .tech-list{
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.2rem;
          opacity: 0.8;
          flex-wrap: wrap;
          
          li {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-weight: 500;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            
            &:hover {
              background: rgba(35, 206, 107, 0.2);
              border-color: rgba(35, 206, 107, 0.3);
              transform: translateY(-0.2rem);
            }
          }
        }
      }
    }
  }

  /* Experience Section Styles */
  .experience {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem;

    .job {
      position: relative;
      padding: 3rem;
      background: linear-gradient(145deg, #2b2b2b 0%, #1f1f1f 100%);
      border-radius: 2rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      color: #FFF;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 0.3rem;
        background: linear-gradient(90deg, var(--pink), var(--blue), var(--yellow));
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        transform: translateY(-0.5rem);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        border-color: rgba(255, 255, 255, 0.2);

        &::before {
          opacity: 1;
        }
      }

      header {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2.5rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        .job-info {
          flex: 1;
          
          h3 {
            font-size: 2.4rem;
            margin-bottom: 0.5rem;
            background: linear-gradient(45deg, #FFF, #e0e0e0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          p {
            font-size: 1.6rem;
            color: var(--blue);
            margin-bottom: 0.5rem;
            font-weight: 500;
          }
          
          span {
            font-size: 1.4rem;
            opacity: 0.7;
            background: rgba(255, 255, 255, 0.1);
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            display: inline-block;
          }
        }
      }

      .body {
        h4 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          margin-top: 2rem;
          color: var(--yellow);
          
          &:first-child {
            margin-top: 0;
          }
        }

        ul {
          list-style: none;
          padding: 0;

          li {
            position: relative;
            padding-left: 2rem;
            margin-bottom: 1rem;
            line-height: 1.6;
            opacity: 0.9;

            &::before {
              content: '▸';
              position: absolute;
              left: 0;
              color: var(--pink);
              font-weight: bold;
            }
          }
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;

          li {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 1.2rem;
            font-weight: 500;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);

            &::before {
              display: none;
            }

            &:hover {
              background: rgba(35, 206, 107, 0.2);
              border-color: rgba(35, 206, 107, 0.3);
              transform: translateY(-0.2rem);
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
      gap: 2rem;
      padding: 1rem;
    }
    
    .experience .job {
      padding: 2rem;
      
      header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
    }
  }

  @media (max-width: 740px){
    margin-top: 10rem;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;
    }
    
    .projects{
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 1rem;
      
      .project {
        padding: 2rem 1.5rem;
      }
    }
    
    .experience {
      padding: 1rem;
      
      .job {
        padding: 1.5rem;
      }
    }
  }

  @media (max-width: 480px){
    .projects .project {
      header .project-links {
        gap: 0.8rem;
        
        a {
          width: 3.5rem;
          height: 3.5rem;
          
          img {
            width: 1.8rem;
            height: 1.8rem;
          }
        }
      }
    }
  }
`