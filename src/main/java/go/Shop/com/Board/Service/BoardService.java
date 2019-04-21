package go.Shop.com.Board.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import go.Shop.com.Board.Model.Board;
import go.Shop.com.Board.respsitory.BoardRepository;

@Service
public class BoardService {

	@Autowired
	BoardRepository boardRepository;
	
	public List<Board> boardList() throws Exception{
		return boardRepository.findAll();
	}
	
	public Page<Board> pageBoardList(int page) throws Exception{
		
		Pageable pageable = PageRequest.of(page, 10);
		
		return boardRepository.findAll(pageable);
	}
	
	public Optional<Board> getBoard(long id) {
		// TODO Auto-generated method stub
		return boardRepository.findById(id);
	}
	
	public void postBoard(Board board) throws Exception{
		
		boardRepository.save(board);
	}

	public void putBoard(Board board, long id) {
		board.setId(id);
		boardRepository.save(board);
	}
	
	public void delBoard(long id) {
		boardRepository.deleteById(id);
	}

	
	
}
