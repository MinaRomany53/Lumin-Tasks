using System;
using System.ComponentModel.DataAnnotations;

namespace LuminAPI.Models
{
    public class Block
    {
        public int TaskId { get; set; }

        [Required(ErrorMessage = "Description is required.")]
        public string Description { get; set; }

        [Required(ErrorMessage = "DueDate is required.")]
        public DateTime DueDate { get; set; }

        public bool IsCompleted { get; set; } = false;
    }
}






