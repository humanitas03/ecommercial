package go.Shop.com.Board.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import go.Shop.com.Board.Model.Board;
import go.Shop.com.Board.Service.BoardService;

@RestController
@RequestMapping("/board")
public class BoardController {
	
	@Autowired
	BoardService boardService;
	
	@RequestMapping(value="/post",method=RequestMethod.GET)
	public List<Board> boardList() throws Exception{
	
		
		return boardService.boardList();
	}
	
	@RequestMapping(value="/post/{page}",method=RequestMethod.GET)
	public Page<Board> pageBoardList(@PathVariable int page) throws Exception{
		Object object = SecurityContextHolder.getContext().getAuthentication().getDetails();
		
		return boardService.pageBoardList(page);
	}
	
	@RequestMapping(value="/post/content/{id}",method=RequestMethod.GET)
	public Optional<Board> getBoard(@PathVariable long id) throws Exception{
		return boardService.getBoard(id);
	}
	
	
	@RequestMapping(value="/post",method=RequestMethod.POST)
	public void postBoard(@RequestBody Board board) throws Exception{
		
		boardService.postBoard(board);
	}
	
	@RequestMapping(value="/post/{id}",method=RequestMethod.PUT)
	public void putBoard(@RequestBody Board board,@PathVariable long id) throws Exception{
		boardService.putBoard(board,id);
	}
	
	@RequestMapping(value="/post/{id}",method=RequestMethod.DELETE)
	public void delBoard(@PathVariable long id) throws Exception{
		boardService.delBoard(id);
	}
	
}
