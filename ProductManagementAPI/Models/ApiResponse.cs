public class ApiResponse<T>
{
    public string Status { get; set; }
    public DateTime Date { get; set; } = DateTime.UtcNow;
    public int Results { get; set; }
    public ApiResponseData<T> Data { get; set; }
}

public class ApiResponseData<T>
{
    public T Products { get; set; }
}
