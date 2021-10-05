package sunny.landlorder.landlorder_backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class DuplicateResourceException extends RuntimeException{

    private static final long serialVersionUID = 2L;

    public DuplicateResourceException(String message) {
        super(message);
    }
}
