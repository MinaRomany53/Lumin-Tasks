using Microsoft.AspNetCore.Mvc;
using ProductManagementAPI.Models; 

[Route("api/v1/products")]
[ApiController]
public class ProductsController : ControllerBase
{
    private static List<Product> _products = new List<Product>{
    new Product
    {
        ProductId = 1,
        Name = "Sample Product 1",
        Description = "This is the first sample product.",
        Price = 16000,
        StockQuantity = 100
    },
    new Product
    {
        ProductId = 2,
        Name = "Sample Product 2",
        Description = "Another example product.",
        Price = 12000,
        StockQuantity = 50
    }
    };

    [HttpGet]
    public IActionResult GetProducts()
    {
        var response = new ApiResponse<IEnumerable<Product>>
        {
            Status = "Success",
            Results = _products.Count,
            Data = new ApiResponseData<IEnumerable<Product>>
            {
                Products = _products
            }
        };

        return Ok(response);
    }

    [HttpPost]
    public IActionResult AddProduct([FromBody] Product product)
    {
        product.ProductId = _products.Count + 1;

        _products.Add(product);

        var response = new ApiResponse<Product>
            {
                Status = "Success",
                Data = new ApiResponseData<Product>
                {
                    Products = product
                }
            };

        return CreatedAtAction(nameof(GetProducts), new { id = product.ProductId }, response);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteProduct(int id)
    {
        var product = _products.FirstOrDefault(p => p.ProductId == id);

        if (product == null)
        {
            return NotFound();
        }

        _products.Remove(product);

        return NoContent();
    }
}