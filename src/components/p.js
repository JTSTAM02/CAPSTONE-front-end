            {answers[currentQuestion].map((answer, index) => (
                    <button style={{ width: '200px', padding: "5px", margin: "4px", backgroundColor: '#CBB26A' }}
                    key={index}
                    className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
                    onClick={() => handleAnswerClick(answer)}
                  >
                    {answer}
                  </button>
            ))}
          </div>
//           <br />
//           <button className="btn-circle"
//             style={{ backgroundColor: '#CBB26A', width: '120px', padding: '10px', margin: '0 auto', display: 'block', border: "solid #CBB26A" }}
//             onClick={handleNextQuestion}>
//             {currentQuestion === questions.length - 1 ? "Get Your Movie" : "Next"}
//           </button>
//         </div>
//       </div>

//       {isModalVisible && showRecommendation && recommendedMovie && (
//         <div className="movie-info">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h2>Your Random Movie Is:</h2>
//             </div>
//             <div className="modal-body">
//               <p>{randomMovie.titleText.text}</p>
//             </div>
//             <div className="modal-footer">
//               <button onClick={() => setIsModalVisible(false)}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}


//       {/* <div className="container-fluid">
//         <div className="card" style={{ padding: "10px", textAlign: 'center', backgroundColor: '#1F5D57',
//         color: '#CBB26A' }}>
//           <h2 className="card-title">{questions[currentQuestion]}</h2>
//           <div className="answers" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//             {answers[currentQuestion].map((answer, index) => (
//               <button style={{ width: '200px', padding: "5px", margin: "4px", backgroundColor: '#CBB26A' }}
//                 key={index}
//                 className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
//                 onClick={() => handleAnswerClick(answer)}
//               >
//                 {answer}
//               </button>
//             ))}
//           </div>
//           <br />
//           <button className="btn-circle"
//           style={{ backgroundColor: '#CBB26A', width: '120px',
//           padding: '10px',
//           margin: '0 auto',
//           display: 'block',
//           border: "solid #CBB26A",
//         }} */}
//           {/* onClick={handleNextQuestion}>
//             {currentQuestion === questions.length - 1 ? "Restart" : "Next"}
//           </button>
//         </div>
//       </div>
//       {showRecommendation && recommendedMovie && (
//         <div> */}
//         {/* <FinalRecommendation recommendedMovie={recommendedMovie} />
//         <button className='btn btn-primary' onClick={handleGetYourMovie}>Get Your Movie</button>
//         </div>
//       )}
//     </div> */}
//     </div>
//   );
// };